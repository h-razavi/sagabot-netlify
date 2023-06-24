//setting up the environment
const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();
const data = require("../../data/data.js");
const { inlineKeyboard } = require("telegraf/typings/markup.js");
const bot = new Telegraf(process.env.BOT_TOKEN);


//extracting messages data
const messages = data.messages;
const facts = data.facts

//initializing the bot
bot.start((ctx) => {
  try {
    return ctx.reply(messages.start);
  } catch (e) {
    console.error("error in start action:", e);
    return ctx.reply("Error occured");
  }
});

//setting up help command
bot.help((ctx) => ctx.reply(messages.help));

//setting up contribute command
bot.command("contribute", Telegraf.reply(messages.contribute));


//setting up podlinks command with inline buttons
bot.command("podlinks", (ctx) => {
  const inlineButtons = Markup.inlineKeyboard(data.podApps);
  ctx.reply("اپلیکیشن مورد نظر رو انتخاب کنید", inlineButtons);
});

//setting up facts command
bot.command("randomfacts",(ctx)=>{
  const inlineButtons = Markup.inlineKeyboard([
    [{text : "اساطیر یونان" , callback_data:"greek" }],
    [{text : "اساطیر نورس" , callback_data:"norse" }],
    [{text : "اساطیر مصر" , callback_data:"egypt" }],
    [{text : "اساطیر ژاپن" , callback_data:"japan" }],
  ])
  ctx.reply("برای دریافت یک دانستنی کوتاه اساطیر مورد نظرتون رو انتخاب کنید: ",inlineButtons)
})


//setting up message forwarding behaviour
bot.on("message", (ctx) => {
  const chatId = process.env.CHAT_ID;
  if (ctx.message.text || ctx.message.voice) {
    return ctx.telegram
      .forwardMessage(chatId, ctx.chat.id, ctx.message.message_id)
      .then(() => ctx.reply("✅ پیام شما با موفقیت دریافت شد! "));
  } else {
    return ctx.reply(messages.notext);
  }
});


//setting up callback query data
bot.on("callback_query",async (ctx)=>{
  const callbackData = ctx.callbackQuery.data;
  let randomFact;
  if (Object.keys(facts).includes(callbackData)){
    const factList = facts[callbackData];
    const randomIndex = Math.floor(Math.random() * factList.length);
    randomFact = factList[randomIndex];
  }
  if(randomFact){
    await ctx.reply(randomFact);
    await ctx.answerCbQuery();
    await ctx.reply("یه دانستنی دیگه /randomfacts");
  }
})


bot.command("sagamusic", (ctx)=>{
  const inlineButtons = Markup.inlineKeyboard([
    [{text : "ep1" , callback_data:"ep1" }]
  ])
  ctx.reply("choose an episode:",inlineButtons)
})

bot.action('ep1', (ctx) => {
  ctx.replyWithAudio({ url: `https://drive.google.com/file/d/1FBPCeYdRkAhu_A0srP9ZzUmjxx8lAMj3` });
  ctx.answerCbQuery();
});


// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

exports.handler = async (event) => {
  try {
    await bot.handleUpdate(JSON.parse(event.body));
    return { statusCode: 200, body: "" };
  } catch (e) {
    console.error("error in handler:", e);
    return {
      statusCode: 400,
      body: "This endpoint is meant for bot and telegram communication",
    };
  }
};
