# Saga Podcast Telegram Bot

This repository contains the code for Saga Podcast Telegram Bot.
The bot was built using JavaScript (Node.js), the [Telegraf.js package](https://telegraf.js.org/), the [Telegram API](https://core.telegram.org/bots), and deployed on Netlify using [Serverless Functions](https://www.netlify.com/products/functions/).

## Bot Functionalities 

The bot can carry out the following operations:

### Start (Message Forwarding)
The main functionality of this bot is forwarding messages received from users,  to admin's main account. Simply type your message and hit send and it will be forwarded.
This bot accepts only "Text" and "Voice" messages (no video,photo, stickers, etc.)

### podlinks
You will get the links to Saga Podcast on different podcast applications.

### sagamusic
With this functionality you can get the mp3 files for music you have heard on Saga Podcast based on episode number. there is also a button to receive a random track from this playlist (for when you don't know what to listen to!)

### randomfacts
Select the myths and legends category and you will receive a random fact about them.

### Contribute
The link to this repository and instructions on how to contribute in developing this project.

## How To Contribute

Before you start, make sure to have Node.js installed.

1. Clone this repository.
```sh
git clone https://github.com/h-razavi/sagapodcast-bot
```
2. Navigate to the project directory and install dependencies:

```sh
cd sagapodcast-bot npm install
```

3. Make your changes and send a pull request.

4. For more details you can contact me via the email listed below. (or even the bot itself)


## Deployment

The bot is deployed as a serverless function on Netlify. To deploy your own bot, follow [Netlify's function deployment documentation](https://docs.netlify.com/functions/build-with-javascript/).


## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

## Contact

- Github: [@h-razavi](https://github.com/h-razavi)
- Email: sagapodcastir@gmail.com

Project Link : [https://github.com/h-razavi/sagapodcast-bot](https://github.com/h-razavi/sagapodcast-bot)
  
---