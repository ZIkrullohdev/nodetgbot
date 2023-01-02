const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const { tiktok_downloader } = require('./request')

const TOKEN = process.env.TOKEN

const bot = new TelegramBot(TOKEN, { polling: true })

const startMessage =
`
TT Saver ga xush kelibsiz.
TikTok videolarini hech qanday belgilarsiz yublab beradigan bot.

Yuklab olishni boshlash uchun TikTok videosining linkini yuboring.
`;

bot.on('message', async (message) => {
    try {
        const chatId = message.chat.id

        if (message.text == '/start') {
            await bot.sendMessage(chatId, startMessage);
        }
    } catch (error) {
        console.log(error + "")
    }

})

bot.on('text', async (message) => {
    try{
        const chatIdVid = message.chat.id
        const video_link = await tiktok_downloader(message.text)
        await bot.sendVideo(chatIdVid, video_link, 
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {text: "Tik Tok Downloader", url: "t.me/TikTokSaverDownloader_bot"}
                        ]
                    ]
                }
            });
    }catch(error){
        console.log(error+"")
    }   
    
}) 
