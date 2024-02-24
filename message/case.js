 require("../config");
const {
proto, 
generateWAMessageFromContent, 
generateWAMessage, 
downloadContentFromMessage, 
getContentType, 
extractUrlFromText } = require("@whiskeysockets/baileys");
const fs = require("fs")
const moment = require("moment-timezone");
const ytdl = require("ytdl-core");
const util = require("util");
const chalk = require("chalk");
const cheerio = require("cheerio") 
const speed = require("performance-now");
const axios = require("axios");
const { uptotelegra } = require("../lib/uploader");
const { exec  } = require("child_process");
const { Sticker, StickerTypes } = require("wa-sticker-formatter");
moment.tz.setDefault('Asia/Jakarta');






//lIB FILE
const { formatp, clockString, getAllCmd, getBuffer, getCases, generateProfilePicture, sleep, fetchJson, runtime,  isUrl,  pickRandom, getGroupAdmins, getRandom,  FileSize, toFirstCase, makeId, formatNumber, durationToSeconds } = require("../lib/myfunc")
const { uploadToGH, deleteFileFromGH, listFilesFromGH } = require('../lib/github')


const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss');
let ucapanWaktu = '';
if (timeWib < "23:59:00") { ucapanWaktu = 'Konbanwa'; }
if (timeWib < "19:00:00") { ucapanWaktu = 'Konbanwa'; }
if (timeWib < "18:00:00") { ucapanWaktu = 'Kombanwa'; }
if (timeWib < "15:00:00") { ucapanWaktu = 'Konnichiwa'; }
if (timeWib < "11:00:00") { ucapanWaktu = 'Ohayou gozaimasu'; }
if (timeWib < "06:00:00") { ucapanWaktu = 'Ohayou gozaimasu'; }


module.exports = Satzz = async (Satzz, m, chatUpdate, store) => {
try {
var body = m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype === "editedMessage" ?m.message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage || m.message.editedMessage.message.protocolMessage.editedMessage.conversation ||  m.text : "";
var budy = typeof m.text == "string" ? m.text : "";
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix;
global.prefix = prefix;
const isCmd = body.startsWith(prefix);
global.chatModifying = "edit: key";
const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
var args = body.trim().split(/ +/).slice(1);
args = args.concat(["", "", "", "", "", ""]);
const pushname = m.pushName || "No Name";
const { type  } = m;
const botNumber = await Satzz.decodeJid(Satzz.user.id);
const isCreator = global.owner + "@s.whatsapp.net" === m.sender ? true :  global.db.data.owner.includes(m.sender)
const isOwner = global.owner + "@s.whatsapp.net" === m.sender ? true :  global.db.data.owner.includes(m.sender)
const itsMe = m.sender == botNumber ? true : false;
const from = m.chat;
const text = args.join(" ").trim()
const q = args.join(" ").trim();
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const senderNumber = m.sender.split("@")[0];


const groupMetadata = m.isGroup ? await Satzz.groupMetadata(m.chat).catch((e) => { }) : ""; 
const groupName = groupMetadata.subject
const participants = m.isGroup ? await groupMetadata.participants : "";
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;

//=================================================//
let ppuser = await Satzz.profilePictureUrl(m.sender, "image").catch(_ => "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60");
const ppg = await getBuffer(ppuser)
const ppgny = await ppg.toString('base64');
//=================================================//
const reSize = (buffer, ukur1, ukur2) => {
const jimp = require('jimp')
return new Promise(async(resolve, reject) => {
var baper = await jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
resolve(ab)
})
}  

//=================================================//
// FAKE QUOTED
const tt = await reSize(ppuser, 200, 200)
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: tt, surface: 200, message: botname, orderTitle: wm, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: tt}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': wm, 'jpegThumbnail': tt}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6283137499954-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': tt}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': tt}}}
const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: tt}}}
//=================================================//

///// FUNCTION \\\\\
//=================================================//
const contextInfo = {
isForwarded: true, 
forwardingScore: 1000,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363229748458166@newsletter",
newsletterName: global.wm,
serverMessageId: 100,
},
businessMessageForwardInfo: {businessOwnerJid: botNumber},
}
const reply = async (teks) => {
return Satzz.sendMessage(m.chat, { text: teks,
contextInfo: { 
mentionedJid: [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + "@s.whatsapp.net") || [m.sender], 
isForwarded: true, 
forwardingScore: 1000,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363229748458166@newsletter", newsletterName: global.wm, serverMessageId: 100, }, businessMessageForwardInfo: {businessOwnerJid: botNumber}, externalAdReply: { title: global.botname, mediaType: 1,  mediaUrl: `https://instagram.com/kurniawanSatzz.mp4`, sourceUrl:`https://instagram.com/kurniawanSatzz.mp4`, thumbnail: thumb
},
}},{ quoted: m });
}
//=================================================//
const react = async (emoti) => {
return Satzz.sendMessage(from, {react: {text: emoti,key: {remoteJid: m.chat,fromMe: false,key: m.key,id: m.key.id,participant: m.sender}}})
}
//=================================================//
async function sendSatzzMessage(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await Satzz.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
//=================================================//
const isNumber = (x) => typeof x === "number" && !isNaN(x);
///// SET DATABASE USERS\\\\\
let user = db.data.users[m.sender];
if (typeof user !== "object") db.data.users[m.sender] = {};
if (user) {
if (!('name' in user)) user.name = pushname
if (!('id' in user)) user.id = senderNumber
} else {
global.db.data.users[m.sender] = {
name: pushname,
id: senderNumber,
date: calender,
}
}
//=================================================//
///// SET DATABASE CHAT\\\\\
let chats = db.data.chats[m.chat];
if (typeof chats !== "object") db.data.chats[m.chat] = {};
if (chats) {
if (!("mute" in chats)) chats.mute = false;
if (!("antilink" in chats)) chats.antilink = false;
if (!("antiviewonce" in chats)) chats.antiviewonce = false;
} else
global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
antiviewonce: false,
};
if (m.message) {
console.log(chalk.bgCyanBright(chalk.black("[ MESSAGE ]")),
chalk.green(moment.tz('Asia/Jakarta').format('HH:mm')),
chalk.blue(`${command} [${budy.length}]`), 
chalk.cyan('dari'),
chalk.red(`${pushname}`), m.isGroup? `${chalk.red('di gc')} ${chalk.red(groupName)}` : "")
console.log(chalk.bgMagentaBright(
chalk.black(`TYPE: ${m.mtype}`)),
chalk.green(moment.tz('Asia/Jakarta').format('HH:mm')))
if (type == 'editedMessage') {
console.log(m.message.editedMessage.message)
}
}
//=================================================//    
// Public & Self
if (!Satzz.public) {
if (!m.key.fromMe && !isCreator) return;
}
///// BADWORD DETECT \\\\\
if (m.isGroup && !isBotAdmins && !isOwner) {
let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|pntk|shit|dick/i 
let isBadword = badwordRegex.test(budy.toLowerCase())
if (isBadword) {
var hapus = m.key.participant
var bang = m.key.id
react('😤')
await sleep(5000)
Satzz.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: bang, participant: hapus }})
}
}        
//=================================================//
///// AUTO VN \\\\\    
if (db.data.audio[budy]) {
Satzz.sendMessage(from, { audio: { url: db.data.audio[budy].link }, mimetype: 'audio/mpeg', ptt: true, waveform: new Uint8Array(64), contextInfo:{mentionedJid:[m.sender]}},{ quoted: m });
}



//ANTI DELETE
if(m.mtype == 'protocolMessage' && !itsMe && !m.chat === 'status@broadcast') {
let mess = chatUpdate.messages[0].message.protocolMessage
let chats = Object.entries(await Satzz.chats).find(([user, data]) => data.messages && data.messages[mess.key.id])
if(chats[1] == undefined) return
if(chats[1] !== undefined){
let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]))
let mmk = await Satzz.copyNForward(mess.key.remoteJid, msg).catch(e => console.log(e, msg))
Satzz.sendMessage(mess.key.remoteJid, {text:"ANTI DELETE AKTIF🗿", contextInfo },{quoted:msg})
}
}
//ANTI VIEWONCE 
if (m.mtype === "viewOnceMessageV2" && !itsMe)  {
await Satzz.sendMessage(m.chat, {react: {text: "🤨", key: {remoteJid: m.chat, fromMe: false, key: m.key, id: m.key.id, participant: m.sender}}})
var view = m.message.viewOnceMessageV2.message
let Type = Object.keys(view)[0]
let media = await downloadContentFromMessage(view[Type], Type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(Type)) {
Satzz.sendMessage(m.chat, {video: buffer, caption:view[Type].caption || '', contextInfo:{
isForwarded: true, 
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363229748458166@newsletter",
newsletterName: global.wm,
serverMessageId: 100,
},
businessMessageForwardInfo: {businessOwnerJid: botNumber}}},{quoted: m})
} else if (/image/.test(Type)) {
Satzz.sendMessage(m.chat, {image: buffer, caption:view[Type].caption || '', contextInfo:{
isForwarded: true, 
forwardingScore: 10000,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363229748458166@newsletter",
newsletterName: global.wm,
serverMessageId: 100,
},
businessMessageForwardInfo: {businessOwnerJid: botNumber}}},{quoted: m})
}
}
//=================================================//
// Auto Dl
let sosmedUrl = await extractUrlFromText(budy) 
if (budy.includes('https://')) {
if (typeof sosmedUrl === 'undefined') return;
// DL IG
if (sosmedUrl.includes("instagram.com")) {
reply(mess.wait)
try {
const res = await fetchJson(`https://api.satganzdevs.tech/api/snapsave?url=${sosmedUrl}`);
for (let i of res.data) {
await Satzz.sendFileUrl(from, i.url, 'nih', m);
}
} catch (error) {
console.error(error);
}
}
//=================================================//
// DL TIKTOK
if (sosmedUrl.includes("tiktok")) {
reply(mess.wait)
let r = await fetchJson(`https://api.satganzdevs.tech/api/tiktok?url=${sosmedUrl}`)
if (r.result.type === "video") { await Satzz.sendMessage(m.chat, { video: await getBuffer(r.result.video1), caption: r.result.desc, streamingSidecar: new Uint8Array(300), contextInfo },{ quoted: floc });
} else {
//try {
let r = await fetchJson(`https://api.satganzdevs.tech/api/tiktok?url=${sosmedUrl}`)
for (let i of r.result.images) {
Satzz.sendMessage(m.chat, { image: {url: i }, caption: r.result.desc, mimetype: 'image/jpeg', contextInfo },{ quoted : floc });
}
}
}
if (sosmedUrl.includes("facebook.com")) {
reply(mess.wait)
fetchJson(`https://api.satganzdevs.tech/api/snapsave?url=${sosmedUrl}`)
.then((response) => {
if (response.status && response.status === true && response.data) {
const resolutionsToTry = ["720p (HD)", "640p", "540p", "480p", "360p", "270p", "240p"];
const findVideoByResolution = (resolutions, data) => {
for (let resolution of resolutions) {
const videoData = data.find((item) => item.resolution === resolution);
if (videoData) {
return videoData;
}
}
return null; 
};
const videoData = findVideoByResolution(resolutionsToTry, response.data);
if (videoData) {
Satzz.sendFileUrl(from, videoData.url, 'Nih', m);
} else {
console.log('Video dengan resolusi yang tersedia tidak ditemukan');
}
} else {
console.log('Response tidak sesuai atau data tidak ditemukan');
}
})
.catch((error) => {
console.error('Error:', error);
});
}
}
//=================================================//
/// menfess chat
if (m.chat.endsWith("@s.whatsapp.net") && m.message) {
this.menfess = this.menfess ? this.menfess : {};
let room = Object.values(this.menfess).find((room) => [room.a, room.b].includes(m.sender) && room.state === "ACTIVE");
if (room) {
if (/^.*(keluar|deletemenfess|hapusmenfess|batal)/.test(m.text)) {
reply(`\`\`\`Kamu Telah Meninggalkan Sesi Menfess\`\`\``);
let other = room.other(m.sender);
if (other) await Satzz.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Menfess\`\`\``);
delete this.menfess[room.id];
}
let other = [room.a, room.b].find((user) => user !== m.sender);
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {contextInfo: {...m.msg.contextInfo, forwardingScore: 0, isForwarded: true, participant: other }} : {});
}
}
if (m.chat.endsWith("@s.whatsapp.net") && m.message) {
this.menfess = this.menfess ? this.menfess : {};
let room = Object.values(this.menfess).find((room) => [room.a, room.b].includes(m.sender) && room.state === "WAITING");
if (room) {
if (m.sender == room.b) {
if (m.text == "Y") {
reply("Anonymous Chat Telah Tersambung\nKetik .hapusmenfess untuk berhenti");
room.state = "ACTIVE";
let other = [room.a, room.b].find((user) => user !== m.sender);
Satzz.sendMessage(other, {text: "Penerima Telah Menkonfirmasi, sekarang Anonymous Chat Telah Tersambung"},{quoted:floc});
}
if (m.text == "N") {
m.reply("oke.");
let other = [room.a, room.b].find((user) => user !== m.sender);
Satzz.sendMessage(other, {text: "Penerima Menolak Anonymous, NiceTry Ya wkwk 😁👍"},{ quoted: floc });
delete this.menfess[room.id];
}
}
}
}















switch (command) {
case 'clearsesi':{
fs.readdir("../session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-")
)
console.log(filteredArray.length);
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return reply(teks)
reply(teks)
await sleep(2000)
reply("Menghapus file sampah session")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./${global.session}/${file}`)
});
await sleep(2000)
reply("Berhasil menghapus semua sampah di folder session")
});
}
break
case "test": case "tes":{
var troli = generateWAMessageFromContent(m.chat,
proto.Message.fromObject({
liveLocationMessage: {
caption: `online yh sayang q`,
jpegThumbnail: await reSize(await getBuffer(global.thumb), 200,200),
contextInfo
},
}),{ userJid: m.chat, quoted: m });
Satzz.relayMessage(m.chat, troli.message, { messageId: troli.key.id,quoted: m }); 
}
break
case "addfile":{
if (!isOwner) return reply(mess.owner)
if (!quoted) return reply('balas media')
let medium = await Satzz.downloadAndSaveMediaMessage(qmsg, q.split("|")[0])
let res = await uploadToGH(global.githubcode, "SatganzDevs", "DATABASES", q.split("|")[1], medium, global.calender)
reply(res)
await fs.unlinkSync(medium)
}
break
case "menfes":
case "menfess":{
if (m.isGroup) return reply("Fitur ini tidak dapat digunakan di grup.");
if (!q) return reply(`Contoh: ${prefix + command} 6282xxxxx`);
this.menfess = this.menfess ? this.menfess : {};
let targetNumber = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
let targetTags = targetNumber.replace(/[@s.whatsapnet]/g, "").replace(/[@S.WHATSAPNET]/g, "");
var checkTarget = await Satzz.onWhatsApp(targetNumber);
if (targetNumber == m.sender) return reply("Tidak bisa mengirim pesan ke nomor sendiri!");
if (checkTarget.length == 0)
return reply(`Nomor tersebut tidak terdaftar di WhatsApp.\n\nMasukkan nomor yang valid dan terdaftar di WhatsApp.`);
let id = + new Date();
this.menfess[id] = {
id,
a: m.sender,
b: targetNumber,
state: "WAITING",
check: function (who = "") {
return [this.a, this.b].includes(who);
},
other: function (who = "") {
return who === this.a ? this.b : who === this.b ? this.a : "";
},
};
let targetName = await Satzz.getName(targetNumber);
let pjText = `Halo ${targetName}\nSeseorang ingin mengirimkan pesan anonim denganmu. Balas *Y* untuk menerima dan *N* untuk menolak.`;
let akhji = `Menunggu penerima untuk mengkonfirmasi...`;
reply(akhji);
Satzz.sendMessage(targetNumber, {text: pjText, contextInfo: {externalAdReply: {title: "MENFESS", body: calender, thumbnailUrl: "https://telegra.ph/file/724c6f109aa780b2d8eb7.jpg", mediaType: 1, renderLargerThumbnail: true}}})
}
break;






//━━━━━━━━━━━━━━━[ INFO MENU ]━━━━━━━━━━━━━━━━━\\
case "runtime":{
reply(runtime(process.uptime()));
}
break;
case "speed":{
const timestampp = speed();
const latensi = speed() - timestampp
reply(`Speed: ${latensi.toFixed(4)} Second`)
}
break
//━━━━━━━━━━━━━━━[ USER ]━━━━━━━━━━━━━━━━━\\
case "tts":
const gtts = require( 'node-gtts')
function tts(text, lang = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }})
}	
let lang = args.join(' ')
let text = args.slice(1).join(' ')
if ((args.join(' ') || '').length !== 2) {
lang = 'id'
text = args.join(' ')
}
if (!q && m.quoted?.text) text = m.quoted.text
let ras
try { ras = await tts(text, lang) }
catch (e) {
m.reply(e + '')
text = args.join(' ')
if (!q) reply( `Use example ${prefix}${command} en hello world`)
reply(global.mess.wait)
ras = await tts(text, defaultLang)
} finally {
if (ras) Satzz.sendMessage(from, {audio: ras, ptt:true, mimetype: "audio/mpeg", waveform: new Uint8Array(64)},{quoted:m})
}	
break
case "tr":{
if (!quoted) return reply('balas text yang ingin di translate! contoh : .tr id')
if (!quoted.text) return reply('pesan yang kamu balas tidak mengandung teks.')
const translate = require('@iamtraction/google-translate');
translate(m.quoted.text, { to: args[0] }).then(res => {reply(res.text) }).catch(err => {
console.error(err);
reply(`The language *${args[0]}* is not supported, type .tr -help to show support language.`)});
}
break
case 'earrape': 
case 'bass': 
case 'blown': 
case 'deep':  
case 'fast': 
case 'fat': 
case 'nightcore': 
case 'reverse': 
case 'robot': 
case 'slow': 
case 'smooth': 
case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
reply(global.mess.wait)
let media = await Satzz.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
Satzz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
case "getcase":{
if (!isOwner) return reply(mess.owner)
if (!q) return reply(mess.query)
reply(await getCases(q))
}
break


//━━━━━━━━━━━━━━━[ GATAU APAH ]━━━━━━━━━━━━━━━━━\\
case "owner":{
await react("🫡");
const loli = [[`6281316701742@s.whatsapp.net`, `${await Satzz.getName('6281316701742@s.whatsapp.net')}`,`${botname} Developers`,`im a red flag 🚩`],[`${botNumber.split('@')[0]}`, `${botname}`,`WhatsApp Bot`, `⚠️ Please Don't Spam Block or Banned`]]
for (let i of db.data.owner) {
let nm = db.data.users[i].name
loli.push([i, nm, `Owner Numpang 🗿`, `gtw`])
}
const sentMsg = await Satzz.sendContactArray(m.chat, loli, m)
await Satzz.sendMessage(from, { text: "mw ngapain?"},{ quoted: sentMsg });
}
break;
case "menu":{
let { menuList } = require("./help");
Satzz.sendMessage(from, {text: await menuList(m.sender, Object.keys(db.data.users).length),
contextInfo: { mentionedJid: [m.sender],
externalAdReply: { title: wm, body: `${week}, ${calender}`, mediaType: 1, sourceUrl: "https://chat.whatsapp.com/H9jyLD4FUse3vzDIjDuzv3", thumbnail: fs.readFileSync('./media/thumb.jpeg'), showAdAtributtion:true, renderLargerThumbnail: true
}}}, { quoted: m });
}
break;




//━━━━━━━━━━━━━━━[ DOWNLOADER MENU ]━━━━━━━━━━━━━━━━━//
case "spdl": case "spotifydl":{
if (!q) return reply(`example use : ${command} https://open.spotify.com/track/3e1rs346dsDDwpqTRGlRZR?si=d92392fad4684017`)
var spottydl = require("spottydl")
reply(mess.wait)
await spottydl.getTrack(q).then(async results => {
let texts =`[ *SPOTIFY DOWNLOADER* ]

⭔ Title : ${results.title}
⭔ Artist : ${results.artist}
⭔ Year : ${results.year}
⭔ Album : ${results.album}
⭔ Id : ${results.id}\n
NOTE : Kami Sedang memproses audio, mohon bersabar`
Satzz.sendMessage(from, {
contextInfo:{
externalAdReply:{
showAdAttribution: true,
title: results.title,
body: results.artist,
mediaType: 1,
mediaUrl: q,
thumbnail: await getBuffer(results.albumCoverURL),
sourceUrl: q,
renderLargerThumbnail: true
}}})
await reply(texts)
let aud = await spottydl.downloadTrack(results, `./src/`)
Satzz.sendMessage(m.chat, { audio: {url: aud[0].filename}, mimetype: "audio/mpeg", ptt: false,},{ quoted: floc })
.then(_ => fs.unlinkSync(aud[0].filename))
});    
}
break
case "ytmp3":{
if (!q) return m.reply(`Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27`);
reply(global.mess.wait)
const url = q;
let bro = await ytdl.getInfo(url);
let mp3File = getRandom(".mp3");
ytdl(url, {
quality: 'highestaudio',
filter: 'audioonly',
format: 'mp3',
}).pipe(fs.createWriteStream(mp3File)).on("finish", async () => {
Satzz.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: "audio/mpeg", ptt: false, mtype: 'audioMessage'},{ quoted: floc }).then(() => {
fs.unlinkSync(mp3File)    
})
})
}
break;
case "ytmp4":{
if (!q) return m.reply(`Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27`);
reply(global.mess.wait);
const url = q;
let mp4File = getRandom(".mp4");
ytdl(url).pipe(fs.createWriteStream(mp4File)).on("finish", async () => {
Satzz.sendMessage(m.chat, { video: fs.readFileSync(mp4File), mimetype: "video/mp4" },{ quoted: floc });
})
}
break;
case "tiktok":{
let { key } = await Satzz.sendMessage(m.chat, {text: "Process"});
let r = await fetchJson(`https://api.satganzdevs.tech/api/tiktok?url=${args.join(' ')}`)
if (r.result.type === "video") { await Satzz.sendMessage(m.chat, { video: await getBuffer(r.result.video1), caption: r.result.desc, streamingSidecar: new Uint8Array(300) },{ quoted: floc });
} else {
try {
let r = await fetchJson(`https://api.satganzdevs.tech/api/tiktok?url=${args.join(' ')}`)
for (let i of r.result.image) {
Satzz.sendMessage(m.chat, { image: {url: i }, caption: r.result.desc, mimetype: 'image/jpeg' },{ quoted : floc });
}
} catch {
await Satzz.sendMessage(m.chat, { text: "Api Error, Mencoba Metode Lain...", edit: key });
let response = await axios.get(`https://dlpanda.com/id?url=${m.text}&token=G7eRpMaa`);
const $ = cheerio.load(response.data);
let imgSrc = [];
let creator = "Jikarinka";
$("div.col-md-12 > img").each((index, element) => {imgSrc.push($(element).attr("src"))});
let fix = imgSrc.map((e) => {return { img: e, creator: creator }});
for (let i of fix) Satzz.sendMessage(m.chat, { image: {url: i.img }, caption: r.result.desc, mimetype: 'image/jpeg' },{ quoted : floc });  
}
}
await Satzz.sendMessage(m.chat, { text: "Success", edit: key }); 
}
break;
case "ig": case "igdl":{
if (!args.join(' ')) return reply("masukan url instagram, contoh : .ig https://instagram.com/kurniawanSatzz.mp4")
let { kuy } = await Satzz.sendMessage(m.chat, {text: "Process"});
try {
const res = await fetchJson(`https://api.satganzdevs.tech/api/snapsave?url=${args.join(' ')}`);
for (let i of res.data) {
await Satzz.sendFileUrl(from, i.url, 'nih', floc);
}
} catch (error) {
console.error(error);
await Satzz.sendMessage(m.chat, { text: "Error", edit: kuy });
}
await Satzz.sendMessage(m.chat, { text: "Success", edit: kuy }); 
}
break;
case "tiktokmp3":{
reply("wait kak")
try {
const tik = await fetchJson('https://api.satganzdevs.tech/api/tiktok?url=' + args.join(' ')) 
Satzz.sendMessage(m.chat, { audio: await getBuffer(tik.result.music), mimetype: "audio/mpeg"},{ quoted: floc });
} catch (error) {
console.log(error);
reply("error");
} 
}
break;
case "scdl": case "souncloud": case "soundclouddl":{
reply("wait kak")
let { soundcloud } = require("../lib/skrep") 
let r = await soundcloud(q)
Satzz.sendMessage(from, {audio: { url: r.link }, mimetype: "audio/mpeg", ptt: false, mtype: 'audioMessage'},{ quoted: floc }); 
}
break;





//━━━━━━━━━━━━━━━[ CONVERTER MENU ]━━━━━━━━━━━━━━━━━//
case "toimg":
case "toimage":{
if (!/webp/.test(mime)) return reply(`Reply sticker dengan caption *${prefix + command}*`);
try {
let media = await Satzz.downloadAndSaveMediaMessage(qmsg);
let ran = await getRandom(".png");
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media);
if (err) throw err;
let buffer = fs.readFileSync(ran);
Satzz.sendMessage(m.chat, { image: buffer, contextInfo }, { quoted: floc });
});
} catch {
let media = await Satzz.downloadAndSaveMediaMessage(qmsg);
let ran = await getRandom(".mp4");
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media);
if (err) throw err;
let buffer = fs.readFileSync(ran);
Satzz.sendMessage(m.chat, { video: buffer }, { quoted: floc });
});
} 
}
break;
case "toaudio":{
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin DijaSatzzn Audio Dengan Caption ${prefix + command
}`);
reply(mess.wait)
let media = await Satzz.downloadMediaMessage(qmsg);
let { toAudio } = require("../lib/converter");
let audio = await toAudio(media, "mp4");
await Satzz.sendMessage(m.chat,
{ audio: audio, mimetype: "audio/mpeg" },{ quoted: floc }); 
}
break;
case "tomp3":{
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio Yang Ingin DijaSatzzn MP3 Dengan Caption ${prefix + command}`);
reply(mess.wait)
let media = await Satzz.downloadMediaMessage(qmsg);
let { toAudio } = require("../lib/converter");
let audio = await toAudio(media, "mp4");
Satzz.sendMessage(m.chat, { document: audio, mimetype: "audio/mpeg", fileName: `Convert By Satzz.mp3` },{ quoted: floc }); 
}
break;
case "tovn":{
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio Yang Ingin DijaSatzzn VN Dengan Caption ${prefix + command}`);
reply(mess.wait)
let media = await Satzz.downloadMediaMessage(qmsg);
let { toPTT } = require("../lib/converter");
let audio = await toPTT(media, "mp4");
Satzz.sendMessage(m.chat, {audio: audio, ptt: true, waveform: new Uint8Array(64), mimetype: "audio/mpeg", },{ quoted: floc }) 
}
break;
case "togif":{
if (!/webp/.test(mime)) return reply(`Reply stiker dengan caption *${prefix + command}*`);
reply(mess.wait)
let { webp2mp4File } = require("../lib/uploader");
let media = await Satzz.downloadAndSaveMediaMessage(qmsg);
let webpToMp4 = await webp2mp4File(media);
await Satzz.sendMessage(m.chat, { video: {url: webpToMp4.result, caption: "Convert Webp To Video",streamingSidecar: new Uint8Array(300),},gifPlayback: true, contextInfo },{ quoted: floc });
await fs.unlinkSync(media) 
}
break;
case "toptv":{
reply(mess.wait);
if (!m.quoted) return reply(`Balas Video Dengan Caption ${prefix + command}`);
if (/video/.test(mime)) {
var ppt = m.quoted;
var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({ ptvMessage: ppt }), { userJid: from, quoted: m });
Satzz.relayMessage(from, ptv.message, { messageId: ptv.key.id }) }
}
break;
case "sticker": case "stiker": case "s":{
if (/image/.test(mime)) {
let media = await Satzz.downloadMediaMessage(qmsg);
const sticker = new Sticker(media, {pack: global.packname,author: global.author,type: StickerTypes.FULL,categories: ["🤩", "🎉"],id: "12345",quality: 50,background: "#000000",});
let memek = await sticker.toFile("sticker.webp");
Satzz.sendMessage(m.chat, { sticker: fs.readFileSync(memek), isAvatar:true },{ quoted: floc });
await fs.unlinkSync(memek);
} else if (/video/.test(mime)) {
let media = await Satzz.downloadMediaMessage(qmsg);
let encmedia = await Satzz.sendVideoAsSticker(m.chat, media, m, {pack: global.packname, author: global.author, isAvatar:true});
await fs.unlinkSync(encmedia);
} else reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`);
}
break;
case "smeme":{
if (!q) return reply(`Balas Image Dengan Caption ${prefix + command}`);
if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`);
if (/image/.test(mime)) {
mee = await Satzz.downloadAndSaveMediaMessage(quoted);
mem = await uptotelegra(mee);
let kaytid 
if (q.includes("|")) {
kaytid = await getBuffer(`https://api.memegen.link/images/custom/${q.split("|")[0]}/${q.split("|")[1]}.png?background=${mem}`);
} else kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${q}.png?background=${mem}`);
Satzz.sendImageAsSticker(m.chat, kaytid, m, {packname: global.packname,author: global.author,isAvatar:true});
} else return reply("hanya bisa membuat smeme dari foto");
}
break;
case 'cut30':
if(quoted < 30) return reply('Vidio harus lebih dari 30 detik')
if (/video/.test(mime)) {
reply('wait')
let media = await Satzz.downloadAndSaveMediaMessage(qmsg, m.sender)
exec(`ffmpeg -i ${media} -c copy -map 0 -segment_time 00:00:30 -f segment -reset_timestamps 1 output%03d.mp4`, async (err) => {
let directoryPath = path.join();
fs.readdir(directoryPath, async function (err, files) {
var filteredArray = await files.filter(item =>item.startsWith("output") )
filteredArray.forEach(async function (file) {
let sampah = fs.existsSync(file)
if(sampah){
await Satzz.sendMessage(from,{caption: `${file}`,video: fs.readFileSync(file)})
fs.unlinkSync(file)
}
})
})
})
} else {
reply("Reply videonya")
}
break





//━━━━━━━━━━━━━━━[ TOOLS MENU ]━━━━━━━━━━━━━━━━━//
case "ytsearch":
case "yts":{
if (!q) return reply(`Example : ${prefix + command} story wa anime`);
reply(mess.wait)
let yts = require("yt-search");
let search = await yts(q);
let teks = "YouTube Search\n\n Result From " + q + "\n\n";
let no = 1;
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${formatNumber(i.views)}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`;
}
Satzz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks },{ quoted: floc });
}
break;
case "play":{
if (!q) return reply(`Example : ${prefix + command} story wa anime`);
reply(mess.wait)
const yts = require("yt-search");
let search = await yts(args.join(' '));
let anu = search.videos[0];
try {
let mp3File = getRandom(".mp3");
ytdl(anu.url, {quality: 'highestaudio'}).pipe(fs.createWriteStream(mp3File)).on("finish", async () => {
Satzz.sendMessage(m.chat, { contextInfo: { contextInfo, externalAdReply: { showAdAttribution: true, 
title: `${anu.title}`,
body: `${week} , ${calender}`,							
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: await getBuffer(anu.thumbnail),
mediaUrl: anu.url,
sourceUrl: anu.url
}}, audio: fs.readFileSync(mp3File), mimetype: "audio/mpeg", ptt: false, seconds: anu.timestamp, mtype: 'audioMessage'},{ quoted: m })
});
} catch (err) {
console.log(err);
}
}
break;
case "tohd":
case "remini":
case "hd": {
if (/image/.test(mime)) {
reply(mess.wait)
const { remini } = require('../lib/remini');
let media = await Satzz.downloadMediaMessage(qmsg);
let resultan = await remini(media, "enhance");
await Satzz.sendMessage(m.chat, { image: resultan, caption: "ɴɪʜ ᴋᴀᴋ ʜᴀꜱɪʟɴʏᴀ (*^ ‿ <*)♡", mimetype: "image/jpeg", contextInfo },{ quoted: floc });
} else return reply('Bot Hanya Bisa Enhance Image/gambar.') 
}
break;
case "ppcp":
case "cp":
case "couple":{
reply(mess.wait)
let anu = await fetchJson("https://raw.githubusercontent.com/SatganzDevs/database/main/kopel.json");
let random = pickRandom(anu)
await Satzz.sendMessage(m.chat, { image: { url: random.male }, caption: `𝘊𝘰𝘸𝘰𝘯𝘺𝘢`, contextInfo},{ quoted: m });
await Satzz.sendMessage(m.chat,{ image: { url: random.female }, caption: `𝘊𝘦𝘸𝘦𝘯𝘺𝘢`, contextInfo},{ quoted: m});
}
break;
case "lyrics":
case "lirik":{
if (!q) return reply(global.mess.query);
reply(mess.wait)
let res = await fetchJson(`https://api.satganzdevs.tech/api/lirik?judul=${q}`);
reply(res.lyrics[0]);
}
break;
case "pinterest": {
if (!q) return reply(global.mess.query);
reply(mess.wait)
if (q.split("|")[1] === "asSticker") {
await fetchJson('https://api.satganzdevs.tech/api/pinterest?query=' + q.split("|")[0]).then(async(res) => {
for ( let ai of res) {
let kaytid = await getBuffer(ai) 
Satzz.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author, isAvatar: true });
await sleep(1000)
}
});
} else {
await fetchJson('https://api.satganzdevs.tech/api/pinterest?query=' + q)
.then(async (res) => {
let count = 0; // Menambahkan variabel untuk menghitung jumlah pesan yang dikirim
for (let i of res) {
if (count < 10) { // Mengecek apakah jumlah pesan yang dikirim sudah mencapai 10
Satzz.sendMessage(m.chat, { image: { url: i }, contextInfo });
count++; 
} else {
break; 
}
}
});
}
}
break;








//━━━━━━━━━━━━━━━[ GROUP MENU ]━━━━━━━━━━━━━━━━━//
case "opentime":
if (!isAdmins) return reply(global.mess.admin)
if (!isBotAdmins) return reply(global.mess.bodmin)
if (args[1]=="detik") {
var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
reply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
Satzz.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
break
case 'closetime':
if (!isAdmins) return reply(global.mess.admin)
if (!isBotAdmins) return reply(global.mess.bodmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
Satzz.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break
case "open":{
if (!isAdmins) return reply(global.mess.admin)
if (!isBotAdmins) return reply(global.mess.bodmin)
Satzz.groupSettingUpdate(from, 'not_announcement')
}
break
case "close":{
if (!isAdmins) return reply(global.mess.admin)
if (!isBotAdmins) return reply(global.mess.bodmin)
Satzz.groupSettingUpdate(from, 'announcement')
}
break
case 'del':
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
if(!users) return reply("Reply pesan")
if (users == botNumber) {
Satzz.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: users} })
} else if(users !== botNumber && isBotAdmins){
Satzz.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: users } })
} 
break
case "kick":{
if (!m.isGroup) return reply(global.mess.group);
if (!isBotAdmins) return reply(global.mess.bodmin);
if (!isAdmins) return reply(global.mess.admin);
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
await Satzz.groupParticipantsUpdate(m.chat, users, "remove").then((res) => reply(res)).catch((err) => reply(err));
}
break;
case "add":{
if (!m.isGroup) return reply(global.mess.group);
if (!isBotAdmins) return reply(global.mess.bodmin);
if (!isAdmins) return reply(global.mess.admin);
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
let kode = await Satzz.groupInviteCode(m.chat)
let tek = `wa.me/${senderNumber} Mencoba Menambahan anda ke grup, tetapi anda membatasi orang yang bisa menambahkan anda ke grup, maka saya mengirim invite, silahkan masuk.`
let res = await Satzz.groupParticipantsUpdate(m.chat, users, "add")
if (res[0].status === "403") {
await reply("gagal menambahkan.")
}
}
break;
case "promote":{
if (!m.isGroup) return reply(global.mess.group);
if (!isBotAdmins) return reply(global.mess.bodmin);
if (!isAdmins) return reply(global.mess.admin);
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
await Satzz.groupParticipantsUpdate(m.chat, users, "promote").then((res) => reply("done")).catch((err) => reply("error"));
}
break;
case "demote":{
if (!m.isGroup) return reply(global.mess.group);
if (!isBotAdmins) return reply(global.mess.bodmin);
if (!isAdmins) return reply(global.mess.admin);
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
await Satzz.groupParticipantsUpdate(m.chat, users, "demote").then((res) => reply("done")).catch((err) => reply("error"));
}
break;
case "setname":
case "setsubject":{
if (!m.isGroup) return reply(global.mess.group);
if (!isBotAdmins) return reply(global.mess.bodmin);
if (!isAdmins) return reply(global.mess.admin);
if (!q) return reply("Text ?");
await Satzz.groupUpdateSubject(m.chat, q).then((res) => reply(global.mess.success)).catch((err) => reply("error"));
}
break;
case "setdesc":
case "setdesk":{
if (!m.isGroup) return reply(global.mess.group);
if (!isBotAdmins) return reply(global.mess.bodmin);
if (!isAdmins) return reply(global.mess.admin);
if (!q) return reply("Text ?");
await Satzz.groupUpdateDescription(m.chat, q).then((res) => reply(global.mess.success)).catch((err) => reply("error"));
}
break;
case "setppgroup":
case "setppgrup":
case "setppgc":{
if (!m.isGroup) return reply(global.mess.group);
if (!isAdmins) return reply(global.mess.admin);
if (!isBotAdmins) return reply(global.mess.bodmin);
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`);
var mediz = await Satzz.downloadAndSaveMediaMessage(quoted, "ppgc.jpeg");
if (q == `/full`) {
var { img } = await generateProfilePicture(mediz);
await Satzz.query({tag: "iq", attrs: { to: m.chat, type: "set", xmlns: "w:profile:picture" }, content: [{ tag: "picture", attrs: { type: "image" }, content: img }]});
fs.unlinkSync(mediz);
reply(`Sukses`);
} else {
var memeg = await Satzz.updateProfilePicture(m.chat, { url: mediz });
fs.unlinkSync(mediz);
reply(`Sukses`);
}
}
break;
case "tagall":{
if (!m.isGroup) return reply(global.mess.group);
if (!isBotAdmins) return reply(global.mess.bodmin);
if (!isAdmins) return reply(global.mess.admin);
let teks = `══✪〘 *👥 Tag All* 〙✪══

➲ *Pesan : ${q ? q : "empty"}*\n\n`;
for (let mem of participants) {
teks += `⭔ @${mem.id.split("@")[0]}\n`;
}
Satzz.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) },{ quoted: floc });
}
break;
case "hidetag":{
if (!m.isGroup) return reply(global.mess.group);
if (!isBotAdmins) return reply(global.mess.bodmin);
if (!isAdmins) return reply(global.mess.admin);
Satzz.sendMessage(m.chat, { text: q ? q : "", mentions: participants.map((a) => a.id) },{ quoted: floc });
}
break;
case "totag":{
if (!m.isGroup) return reply(global.mess.group);
if (!isBotAdmins) return reply(global.mess.bodmin);
if (!isAdmins) return reply(global.mess.admin);
if (!m.quoted) return reply(`Reply pesan dengan caption ${prefix + command}`);
Satzz.sendMessage(m.chat, {forward: m.quoted.fakeObj, mentions: participants.map((a) => a.id)});
}
break;





//━━━━━━━━━━━━━━━[ OWNER MENU ]━━━━━━━━━━━━━━━━━\\
case "pinterestdl": case "pindl":{
if (!q) return reply('urlnya??')     
let res = await fetchJson(`https://api.satganzdevs.tech/api/pinterestdl?url=${q}`)
Satzz.sendFileUrl(from, res.videoUrl, "", m)
}
break
case "restart":{
if (!isOwner && !itsMe) return reply(mess.owner)
let bot = db.data.others['restart']
if(bot){
db.data.others['restart'].m = m
db.data.others['restart'].from = from
} else {db.data.others['restart'] = {
m:m,
from:from
}
}
await Satzz.sendMessage(from, {text: `_Restarting ${wm}_`},{quoted:floc})
process.send('reset')
}
break
case "backup":{
if (!isCreator) return reply(global.mess.owner) 
reply(global.mess.wait)
const archiver = require('archiver');
const sourcePath = './'; 
const backupFileName = 'backup.zip';
try {
const output = fs.createWriteStream(backupFileName);
const archive = archiver('zip', { zlib: { level: 9 } });
archive.pipe(output);
archive.on('warning', function(err) {
if (err.code === 'ENOENT') {
console.warn(err);
} else {
throw err;
}
});
archive.glob('**/*', { cwd: sourcePath, ignore: ['node_modules/**/*', 'satzz-session/**', '**/.*', backupFileName]});
await archive.finalize()
await Satzz.sendMessage(m.sender, {document: {url: './backup.zip'}, mimetype: "application/zip", fileName: "backup.zip"}, {quoted: m}) 
} catch (error) {
console.error('Terjadi kesalahan:', error);
throw new Error('Terjadi kesalahan saat membuat arsip.');
}
}
break
case "addvn":{
if (/audio/.test(mime)) {
const client = require("filestack-js").init("A6B7DMp9NQXmniwrvMoEEz");
if (!q) return reply("Nama audionya apa?");
if (db.data.audio[q]) return reply("Nama tersebut sudah ada di dalam database");
let media = await Satzz.downloadAndSaveMediaMessage(qmsg, q);
await client.upload(media, {}, { filename: q }, {}).then((data) => {
db.data.audio[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url,
};
});
let teks = `Berhasil menambahkan audio
ke dalam database dengan nama *${q}*`;
await reply(teks);
await fs.unlinkSync(media);
} else return reply("Reply audio");
}
break;
case "delvn":{
try {
if (!db.data.audio[q]) return reply("Nama tersebut tidak ada di dalam data base");
const client = require("filestack-js").init("A6B7DMp9NQXmniwrvMoEEz");
const policy = 'eyJleHBpcnkiOjE3MzI5ODYwMDAsImNhbGwiOlsicmVtb3ZlIl19'; // Gantilah dengan kebijakan keamanan Anda
const signature = '30f04767f47c592c9ec1ac089707aea13d2ba97be7472915e8c9ca18757187f7'; 
client.remove(db.data.audio[q].link.split(".com/")[1], { policy, signature })
delete db.data.audio[q];
reply(`Sukses delete vn ${q}`);
} catch (err) {
console.log(err);
reply("eror kak");
}
}
break;
case "listvn": {
let vnListMessage = `*── 「 VOICE NOTE LIST 」 ──*\nTotal: ${Object.keys(db.data.audio).length
}\n\n`;
for (let key in db.data.audio) {
if (db.data.audio.hasOwnProperty(key)) {
let voiceNote = db.data.audio[key];
vnListMessage += `${emot} Name: ${voiceNote.name}\n${emot} ID: ${voiceNote.id}\n${emot} Size: ${voiceNote.size}\n${emot} Link: ${voiceNote.link}\n\n`;
}
}
reply(vnListMessage);
}
break;
case "kirim":{
if (!q) return (`mana urlnya? contoh: kirim https//xnxxxx.mp4|lol`)
reply(global.mess.wait)
let urls
try {
if (q.includes("|")) urls = q.split("|")[0]
} catch { urls = q }
Satzz.sendMessage(from, {video: {url: urls }, caption: q.split('|')[1] || "" },{quoted:fgif})
}
break
case "cleartmp":{
let path = require("path");
let directoryPath = path.join();
let {apa} = await Satzz.sendMessage(from, {text: "Wait a second..."})
fs.readdir(directoryPath, async function (err, files) {
if (err) {
console.log("Unable to scan directory: " + err);
return Satzz.sendMessage(m.chat, { text: "Unable to scan directory: " + err, edit: apa }) }
let filteredArray = await files.filter((item) => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("webp") || item.endsWith("webm") || item.endsWith("jfif"));
console.log(filteredArray.length);
if (filteredArray.length === 0) return Satzz.sendMessage(m.chat, { text: `No trash files detected.`, edit: apa });
let text = `Detected ${filteredArray.length} trash files\n\n`;
if (filteredArray.length === 0) return Satzz.sendMessage(m.chat, { text: text, edit: apa });
filteredArray.map(function (e, i) { text += i + 1 + `. ${e}\n` });
Satzz.sendMessage(m.chat, { text: text, edit: apa });
await sleep(2000);
Satzz.sendMessage(m.chat, { text: text, edit: apa });
await filteredArray.forEach(function (file) { fs.unlinkSync(file) });
await sleep(2000);
Satzz.sendMessage(m.chat, { text: text, edit: apa });
});
}
break;
case "setppbot":{
if (!isCreator) return reply(global.mess.owner);
const {apa} = await Satzz.sendMessage(from, {text: "Wait a second..."})
let medis = await Satzz.downloadAndSaveMediaMessage(qmsg, "ppg");
var { img } = await generateProfilePicture(medis);
await Satzz.query({tag: "iq", attrs: { to: botNumber, type: "set", xmlns: "w:profile:picture" }, content: [{tag: "picture", attrs: { type: "image" }, content: img }]});
fs.unlinkSync(medis);
await Satzz.sendMessage(m.chat, { text: "sucess update profile picture", edit: apa });
}
break;
case "block":{
if (!isCreator) return reply(global.mess.owner);
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
await Satzz.updateBlockStatus(users, "block").then((res) => reply(jsonformat(res))).catch((err) => reply("error"));
}
break;
case "unblock":{
if (!isCreator) return reply(global.mess.owner);
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
await Satzz.updateBlockStatus(users, "unblock").then((res) => reply(jsonformat(res))).catch((err) => reply("error"));
}
break;
case "public":{
if (!isCreator && !itsMe) throw global.mess.owner;
if (Satzz.public == true) return reply(`Sudah Mode Public Sebelumnya`)
Satzz.public = true;
reply("Sukse Change To Public Usage");
}
break;
case "self":{
if (!isCreator && !itsMe) throw global.mess.owner;
if (!Satzz.public) return reply(`Sudah Mode Self Sebelumnya`)
Satzz.public = false;
reply("Sukses Change To Self Usage");
}
break;
case "addown": case "addowner":{
if (!isCreator) return reply(global.mess.owner)
let turbo = m.quoted.sender
if(!db.data.users[target] ) return reply("User belom terdaftar di database bot")
db.data.owner.push(turbo)
let teks =`
_*SUCCESS*_

🆔 *Name :* ${db.data.users[turbo].name}
📛 *Number:* @${turbo.split("@")[0]}`
reply(teks)
}
break
case "delown": case "delowner":{
if (!isCreator) return reply(global.mess.owner);
let targetUser = m.quoted.sender;
if (!db.data.users[targetUser]) return reply("User belum terdaftar di database bot");
let index = premium.indexOf(targetUser);
if (index !== -1) {
db.data.owner.splice(index, 1); // Menghapus elemen dari array berdasarkan indeks
reply(`Suksess Menghapus Data Premium @${targetUser.split("@")[0]} Sekarang Dia Menjadi User Biasa.`);
} else {
reply("User tidak ditemukan dalam daftar premium");
}
}
break;
case "listown":  case "listowner":{
let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`;
let tagged = null;
for (let i of db.data.owner) {
tagged = await Satzz.getName(i);
txt += `*Name :* ${db.data.users[i].name}\n*Number :* @${i.split("@")[0]}\n\n`;
}   
reply(txt);
}
break;
case ">":{
if (!isCreator) return reply(global.mess.owner);
const evalAsync = () => {
return new Promise(async (resolve, reject) => {
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== "string")
evaled = require("util").inspect(evaled);
resolve(evaled) } catch (err) { reject(err) }
})};
evalAsync().then((result) => m.reply(result)).catch((err) => reply(String(err)));    
}
break
case "$":{
if (!isCreator) return m.reply(global.mess.owner);
reply("Executing...");
exec(budy.slice(2), async (err, stdout) => {
if (err) return m.reply(`${err}`);
if (stdout) return m.reply(stdout);
});      
}
break
default:
}




//━━━━━━━━━━━━━━━[ ERROR RESPONSE ]━━━━━━━━━━━━━━━━━// 
} catch (err) {
const Ownerins = async (teki) => {
return await Satzz.sendMessage(`6281316701742@s.whatsapp.net`, {text: teki, contextInfo: {externalAdReply: {title: "ERROR", thumbnail: fs.readFileSync("./media/thumb.jpeg"), mediaType: 1, renderLargerThumbnail: true}}})
}
console.error(err);
let tekidum =`]─────「 *SYSTEM-ERROR* 」─────[\n\n${util.format(err)}\n\n© ${botname}`
Ownerins(tekidum)
m.reply(`Someting went Wrong`);
}
};


















//━━━━━━━━━━━━━━━[ DETECT FILE UPDATE ]━━━━━━━━━━━━━━━━━\\
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(chalk.blueBright(`「 Updated 」 ${__filename}`));
delete require.cache[file];
require(file);
});
