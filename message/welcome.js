const { welcomeCard } = require("greetify");


exports.memberUpdate = async(satganzdevs, anu) => {
function cutUsername(username, maxLength = 15) {
if (username.length <= maxLength) {
return username;
} else {
return username.substring(0, maxLength);
}
}
let metadata = await satganzdevs.groupMetadata(anu.id)
const memk = metadata.participants.length
const groupDesc =  metadata.desc || []
let participants = anu.participants
for (let num of participants) {
// Get Profile Picture User
let _ppus = await satganzdevs.profilePictureUrl(num, 'image').catch(_ =>'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
let usname = await satganzdevs.getName(num)
// Get Profile Picture Group
let ppgroup = await satganzdevs.profilePictureUrl(anu.id, 'image').catch(_ =>'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')




if (anu.action == 'add') {
const card = new welcomeCard()
.setName(cutUsername(usname))
.setAvatar(_ppus)
.setMessage(`You're ${memk + 1}th Member`)
.setBackground("https://s6.imgcdn.dev/ZqH2S.png")
.setColor("00FF38")
.setTitle("Yokoso")
const _wlcm = await card.build()
satganzdevs.sendMessage(anu.id, 
{ image: _wlcm, 
caption: `*「 YOKOSO 」*
Konnichiwa *@${num.split('@')[0]}*💐 
Member ke : *${memk}*
Setsumeisho : \n${groupDesc}`, contextInfo: { mentionedJid : [num]}});
} else if (anu.action == 'remove') {
const cards = new welcomeCard()
.setName(cutUsername(usname))
.setAvatar(_ppus).setMessage(`The ${memk + 1}th Member`)
.setBackground("https://s6.imgcdn.dev/ZqH2S.png")
.setColor("00FF38")
.setTitle("Sayonara")
const _gdbye = await cards.build()
satganzdevs.sendMessage(anu.id, 
{ image: _gdbye, 
caption: `*「 SAYONARA 」*
Sayonara *@${num.split('@')[0]}*💐
Member ke : *${memk}*
_Gurupu no riyū de memba ga demashita_`, contextInfo: { mentionedJid : [num]}});
} else if (anu.action == 'promote') {
  satganzdevs.sendMessage(anu.id, {text: `@${num.split('@')[0]} が管理者に昇格しました。`, contextInfo: { mentionedJid : [num]}});
} else if (anu.action == 'demote') {
  satganzdevs.sendMessage(anu.id, {text: `@${num.split('@')[0]} が一般メンバーに降格しました。`, contextInfo: { mentionedJid : [num]}});
} else console.log(anu.action)
}
}