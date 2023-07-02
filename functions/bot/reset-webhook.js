function setWebhook(){
    fetch("https://api.telegram.org/bot6202538788:AAHsFcVu2HCrFw6JR7bPLAWw5MRycY35Iac/setWebhook?url=https://sagapodcast-bot.netlify.app/api/bot").then(()=>console.log("Webhook set ok"))
}

setTimeout(setWebhook,900000)
