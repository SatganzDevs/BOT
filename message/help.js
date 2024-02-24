const fs = require('fs')
const chalk = require('chalk')
const moment = require("moment-timezone")
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
moment.tz.setDefault("Asia/Jakarta").locale("id");




const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

const menuList = (sender, jumlah_user) => `
${ucapanWaktu} *@${sender.split('@')[0]}* ヾ(≧▽≦*)o

╭──◯ 『 ＢＯＴ ＤＥＴＡＩＬＳ 』
│
│⇒ ＨＯＳＴＥＤ ＯＮ : Pterodactyl
│⇒ ＭＯＤＥ : Public
│⇒ ＵＳＥＲＳ : ${jumlah_user} users online.
│⇒ ＢＡＮＮＥＤ : 129 users banned.
│
╰──────────────◯

╭──◯  『 ＳＥＲＶＥＲ ＴＩＭＥ 』
│
│⇒  ${week}, ${calender} 
│⇒  ${timeWib} WIB 
│⇒  ${dateIslamic} 
│
╰──────────────◯

${readmore}

✪─────► 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 ◄─────✪

┌──ㅤ〔 ＣＯＮＶＥＲＴＥＲ 〕
│⩽⩾︎ *_.bass_*
│⩽⩾︎ *_.blown_*
│⩽⩾︎ *_.deep_*
│⩽⩾︎ *_.earrape_*
│⩽⩾︎ *_.fast_*
│⩽⩾︎ *_.fat_*
│⩽⩾︎ *_.nightcore_*
│⩽⩾︎ *_.reverse_*
│⩽⩾︎ *_.robot_*
│⩽⩾︎ *_.slow_*
│⩽⩾︎ *_.smeme_*
│⩽⩾︎ *_.sticker_*
│⩽⩾︎ *_.toaudio_*
│⩽⩾︎ *_.toimg_*
│⩽⩾︎ *_.tomp3_*
│⩽⩾︎ *_.tovideo_*
│⩽⩾︎ *_.tovn_*
│⩽⩾︎ *_.tupai_*
└───────────▢

┌──ㅤ〔 ＤＯＷＮＬＯＡＤＥＲ 〕
│⩽⩾︎ *_.instagram_*
│⩽⩾︎ *_.pinterestdl_*
│⩽⩾︎ *_.spotifydl_*
│⩽⩾︎ *_.tiktok_*
│⩽⩾︎ *_.ttaudio_*
│⩽⩾︎ *_.ytmp3_*
│⩽⩾︎ *_.ytmp4_*
└───────────▢

┌──ㅤ〔 ＧＲＯＵＰ 〕
│⩽⩾︎ *_.add_*
│⩽⩾︎ *_.close_*
│⩽⩾︎ *_.closetime_*
│⩽⩾︎ *_.demote_*
│⩽⩾︎ *_.hidetag_*
│⩽⩾︎ *_.kick_*
│⩽⩾︎ *_.opentime_*
│⩽⩾︎ *_.open_*
│⩽⩾︎ *_.promote_*
│⩽⩾︎ *_.setdesc_*
│⩽⩾︎ *_.setnamegc_*
│⩽⩾︎ *_.setppgc_*
│⩽⩾︎ *_.tagall_*
└───────────▢

┌──ㅤ〔 ＭＡＩＮ 〕
│⩽⩾︎ *_.gcbot_*
│⩽⩾︎ *_.owner_*
│⩽⩾︎ *_.runtime_*
│⩽⩾︎ *_.speed_*
└───────────▢

┌──ㅤ〔 ＯＷＮＥＲ 〕
│⩽⩾︎ *_.$_*
│⩽⩾︎ *_.>_*
│⩽⩾︎ *_.backup_*
│⩽⩾︎ *_.getcase_*
│⩽⩾︎ *_.restart_*
└───────────▢

┌──ㅤ〔 ＳＴＯＲＡＧＥ 〕
│⩽⩾︎ *_.addvn_*
│⩽⩾︎ *_.delvn_*
│⩽⩾︎ *_.listvn_*
└───────────▢

┌──ㅤ〔 ＴＯＯＬＳ & ＳＥＡＲＣＨ 〕
│⩽⩾︎ *_.ai_*
│⩽⩾︎ *_.couple_*
│⩽⩾︎ *_.lirik_*
│⩽⩾︎ *_.menfess_*
│⩽⩾︎ *_.pinterest_*
│⩽⩾︎ *_.play_*
│⩽⩾︎ *_.remini_*
│⩽⩾︎ *_.translate_*
│⩽⩾︎ *_.ytsearch_*
└───────────▢
`;
module.exports = { menuList }


//━━━━━━━━━━━━━━━[ DETECT FILE UPDATE ]━━━━━━━━━━━━━━━━━\\
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(chalk.blueBright(`「 Updated 」 ${__filename}`));
delete require.cache[file];
require(file);
});