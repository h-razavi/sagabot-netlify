const { Telegraf , Markup } = require("telegraf")
require("dotenv").config();
const data = require("../../data/data.js")
const bot = new Telegraf(process.env.BOT_TOKEN)

const messages = data.messages;

bot.start(ctx => {
  try {
    return ctx.reply(messages.start)
  } catch (e) {
    console.error("error in start action:", e)
    return ctx.reply("Error occured")
  }
})

bot.help((ctx) => ctx.reply(messages.help));

bot.command("podlinks",(ctx)=>{
  const inlineButtons = Markup.inlineKeyboard(data.podApps);
  ctx.reply("اپلیکیشن مورد نظر رو انتخاب کنید" , inlineButtons)
})

bot.on('message',(ctx)=>{
    const chatId = process.env.CHAT_ID;
    const botCommands = "/contribute"

    if(ctx.message.text===botCommands){
      return ctx.reply(messages.contribute)
    }

    if(ctx.message.text||ctx.message.voice){
        return ctx.telegram.forwardMessage(chatId,ctx.chat.id,ctx.message.message_id)
    } else {
       return ctx.reply(messages.notext)
    }
})

bot.command('contribute', Telegraf.reply(messages.contribute));


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));


exports.handler = async event => {
  try {
    await bot.handleUpdate(JSON.parse(event.body))
    return { statusCode: 200, body: "" }
  } catch (e) {
    console.error("error in handler:", e)
    return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
  }
}