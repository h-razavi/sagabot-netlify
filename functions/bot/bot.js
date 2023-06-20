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

const contMessage = "اگر دوست داشتید می‌تونید از ریپازیتوری گیت‌هاب زیر در توسعه و بهبود این ربات تلگرامی به عنوان یک پروژه متن باز کمک کنید \n https://github.com/h-razavi/sagapodcast-bot "


bot.on('message',(ctx)=>{
    const chatId = process.env.CHAT_ID;
    const botCommands = "/contribute"

    if(ctx.message.text===botCommands){
      return ctx.reply(contMessage)
    }

    if(ctx.message.text||ctx.message.voice){
        return ctx.telegram.forwardMessage(chatId,ctx.chat.id,ctx.message.message_id)
    } else {
       return ctx.reply("لطفاً فقط پیام متنی یا صوتی بفرستید!")
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