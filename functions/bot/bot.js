const { Telegraf } = require("telegraf")
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => {
    const message =
    "سلام؛ به ربات تلگرامی پادکست ساگا خوش اومدید! \n پیام خودتون رو به شکل متنی یا صوتی برای ما بفرستید";
  try {
    return ctx.reply(message)
  } catch (e) {
    console.error("error in start action:", e)
    return ctx.reply("Error occured")
  }
})

bot.on('message',(ctx)=>{
    const chatId = process.env.CHAT_ID;
    const botCommands = "/contribute"

    if(ctx.message.text===botCommands){
      ctx.reply(contMessage)
    }

    if(ctx.message.text||ctx.message.voice){
        ctx.telegram.forwardMessage(chatId,ctx.chat.id,ctx.message.message_id)
    } else {
        ctx.reply("لطفاً فقط پیام متنی یا صوتی بفرستید!")
    }
})

bot.command('contribute', Telegraf.reply(contMessage));


exports.handler = async event => {
  try {
    await bot.handleUpdate(JSON.parse(event.body))
    return { statusCode: 200, body: "" }
  } catch (e) {
    console.error("error in handler:", e)
    return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
  }
}