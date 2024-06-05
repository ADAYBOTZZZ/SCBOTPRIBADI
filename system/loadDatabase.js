
const fs = require('fs'), 
chalk = require('chalk'), 
moment = require('moment-timezone'), 
crypto = require('crypto');

module.exports = async (conn, msg) => {
try {
let d = new Date;
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const calender = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })
const isNumber = x => typeof x === 'number' && !isNaN(x)
const from = msg.key.remoteJid
const isGroup = from.endsWith('@g.us')
const sender = conn.decodeJid(msg.key.fromMe ? conn.user.id : isGroup ? msg.key.participant : from)
const pushname = msg.pushName || '-'
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')

/* FUNCTION ADD DATABASE USER BY conn */
if (sender.endsWith('@s.whatsapp.net')) {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let users = global.db.users[sender]
if (typeof users !== 'object') global.db.users[sender] = {}
if (users) {
if (!('jid' in users)) users.jid = sender
if (!('register' in users)) users.register = true;
if (!('name' in users)) users.name = pushname;
if (!('serial' in users)) users.serial = crypto.randomBytes(10).toString('hex');
if (!('date' in users)) users.date = tanggal;
if (!isNumber(users.balance)) users.balance = 10000;
if (!isNumber(users.limit)) users.limit = 15;
if (!isNumber(users.afkTime)) users.afkTime = -1;
if (!('afkReason' in users)) users.afkReason = '';
if (!('owner' in users)) users.owner = false;
if (!('premium' in users)) users.premium = false;
if (!('banned' in users)) users.banned = false;
} else global.db.users[sender] = {
jid:  sender,
register: true,
name: pushname,
serial: crypto.randomBytes(10).toString('hex'),
date: tanggal,
balance: 10000,
limit: 15,
afkTime: -1,
afkReason: '',
owner: false,
premium: false,
banned: false
}
}

// DATABASE GROUP
if (isGroup) {
let metadata = await conn.groupMetadata(from) || {}
let groupName = metadata?.subject || '-'
let groups = global.db.groups[from]
if (typeof groups !== 'object') global.db.groups[from] = {}
if (groups) {
if (!('jid' in groups)) groups.jid = from
if (!('name' in groups)) groups.name = groupName
if (!('antilinkyt' in groups)) groups.antilinkyt = false
if (!('antilink' in groups)) groups.antilink = false
} else {
global.db.groups[from] = {
jid: from,
name: groupName,
antilinkyt: false, 
antitoxic: false
}
}
}

} catch (e) {
console.log(e);
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.greenBright("[ UPDATE ]"), chalk.whiteBright(`${__filename}`) )
delete require.cache[file]
require(file)
})