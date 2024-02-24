const fs = require('fs')
const chalk = require('chalk')
const moment = require("moment-timezone");
const { pickRandom } = require('./lib/myfunc')
moment.tz.setDefault('Asia/Jakarta');
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()




global.weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
global.week = d.toLocaleDateString(locale, { weekday: 'long' })
global.calender = d.toLocaleDateString("id", {day: 'numeric', month: 'long', year: 'numeric'})
global.owner = ['6281316701742'] 
global.botname = 'ＳＩＥＳＴＡ - ＮＡＴＳＵＧＡＮＩ'
global.packname = '' 
global.author = "Made With ❤️ By @kurniawansatria.mp4"
global.prefa = ['','!','.',',','🐤','🗿']
global.wm = 'ＳＩＥＳＴＡ - ＮＡＴＳＵＧＡＮＩ'
global.botName = 'ＳＩＥＳＴＡ - ＮＡＴＳＵＧＡＮＩ'
global.thumb = fs.readFileSync('./media/thumb.jpg')
global.sessionName = 'session' 
global.sp = '⭔' 
global.sgc = "https://chat.whatsapp.com/G6W25LQb4Ce2i8r4Z0du1q"
global.link = "https://instagram.com/kurniawansatria.mp4"
global.githubcode = "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"
global.limitawal = {
premium: "Infinity",
free: 10
}


global.mess = {
wait: "[⏳] Tunggu sebentar...",
premium: "[❗] Khusus Pengguna Premium!",
owner: "[❗] Khusus Pemilik!",
admin: "[❗] Khusus Admin!",
grup: "[❗] Khusus Grup!",
bodmin: "[❗] Bot Harus Menjadi Admin Terlebih Dahulu!",
limit: "[❗] Batas Anda habis, silakan mainkan permainan untuk mendapatkannya!",
}








let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(chalk.blueBright(`「 Updated 」 ${__filename}`));
delete require.cache[file];
require(file);
});