// POWERED
const fs = require('fs')
const chalk=require('chalk')
const axios = require('axios');
const stringSimilarity = require("string-similarity");

// MODULE
global.version = require('@whiskeysockets/baileys/package.json').version
global.baileys = require('@whiskeysockets/baileys') 

//PASSWORD SCRIPT 🫳
global.pw = 'titit' 

// SETTING WHATSAPP BOT
global.owner = '6285727785143@s.whatsapp.net' // akses owner
global.owner2 = '6285727785143' // nomor owner
global.nomorbot = '6285727785143' // nomor bot nya
global.namabotnya = 'Kym Bot Whatsapp' // nama bot
global.idgcs = "12036325805939@g.us" // opsional ID group
global.idsal = "120363198449557@newsletter" // opsional ID saluran
global.idnotice = '120363250825067@newsletter' // harus di isi

// CREATOR OPTION
global.namaownernya = 'Lyosh' // owner name
global.packname = '©Powered By Lyosh' // watermark
global.author = 'Lyosh' // your name
global.sessionName = 'session' // dont change
global.versi = '1.0.0'
// THUMBNAIL PP BOT
global.ppkosong = 'https://telegra.ph/file/98aa5b8b01f53877824c3.jpg'
global.trash = fs.readFileSync('./Procfile')
global.thumb = fs.readFileSync('./assets/sticker/kym.png')
global.menu = 'https://telegra.ph/file/2647295d639ccb98be08f.jpg'
global.tamnel = 'https://telegra.ph/file/df09d39f9fd4e1daed1b8.jpg'

// THUMBNAIL PUSHKONTAK
global.pushviddeo = 'https://telegra.ph/file/2d25eb0db37e8e88fdef6.mp4' //video
global.pushphoto = 'https://telegra.ph/file/8e8d0d6566764b6b9ce7e.jpg'

// SETT PAIRING
global.usePairingCode = true
global.pairingNumber = '6283189242715'

// SET OWNER
global.fake = 'Kym Beta'
global.email = '@gmail.com'
global.group = 'chat.whatsapp.com/FkPsAtor8FU5nlrl2Ai3xK'
global.saluran = 'https://whatsapp.com/channel/lyosh_'
global.youtube = 'https://youtube.com/@lyosh_'
global.instagram = 'https://instagram.com/'
global.github = 'https://github.com/'
global.wame = 'https://wa.me/6285727785143'
global.region = 'I`m From Indonesia'

// TEXT WELCOME
global.welcome5 = `Selamat datang semoga betah ya ☺` // kata" welcome
global.remove5 = `Kenapa keluar 🐣 nanti balik lagi yahh :)` // kata" keluar

// SETTING BOT
global.prefix = ['.']
global.self = true //true untuk public
global.autoreadsw = true // meneruskan status dari nomor bot
global.autoread = false // auto baca pesan pengguna
global.chatgpt = false // auto chat gpt, only private chat
global.simisimi = false // auto simi reply
global.welcome = false // sistem welcome group otomatis
global.onlygc = false // fungsi hanya untuk group chat
global.onlypc = false // fungsi hanya untuk private chat
global.game = true // guna agar command game bisa dimatikan/diaktifkan
global.autoreject = true // auto reject panggilan bot
global.antilink = true // antilink, hapus semua pesan berupa link
global.antiSpam = true // belum di beri fungsi
global.antibot = true // belum di beri fungsi
global.autojoin = true  // mode jelajah, bergabung otomatis tanpa command
global.boostgc = false // jumlah member dengan title group secara real time
global.autodel = false // hapus semua tipe pesan otomatis gc/pc
global.autodonlod = false // guna download file tanpa command awal
global.autoTyping = true // composing mengetik saat melakukan perintah
global.pengingat = false // notif sistem otomatis
global.tekspushkonv2 = '' // gunakan teks ini jika user tidak mengisi teks
global.select = 2 // opsi pilihan untuk polling bot

// RESPON AKSES
global.mess = {
sukses: '*`Loaded Success`*',
admin: '*`System Notice`* for *admin!* not *npc*',
botAdmin: '*`System Notice`* please add bot *admin*',
owner: '*`System Access Failed`* Access Denied',
group: '*`System Notice`* Use this in group chat!',
private: '*`System Notice`* Use this in private chat!',
bot: '*`System Notice`* Only Bot user',
error: '*`System Failed`* Error, please contact the owner',
wait: '*`Loading`* Please Wait',
prem: '*`System Notice`* this only premium user'
}

// FAKE TROLI REPLY
global.f1 = (a, b) => {
let fake = {key: {remoteJid: 'status@broadcast', participant: '42424242435@s.whatsapp.net'}, message: {orderMessage: {itemCount: 1, status: 1, surface: 1, message: a, orderTitle: '', thumbnail: b, sellerJid: '4242242354@s.whatsapp.net'}}};
return fake
}


// TEXT PENAGIHAN & INFO PRABAYAR
global.dana = '-'
global.ovo = '-'
global.gopay = '-'
global.shopepay = '-'
global.qris = '_' // cara buat gambar jadi url, ketik tourl ke bot kym
global.tagih = `Bayar Kontol` // ubah text hijau nya saja, jangan hapus ''

// PANEL SETTING
global.domain = 'https://lyoshxocang.my.id' // Domain
global.apikey = 'ptla_JlLiHpC' // Ptla
global.c_apikey = 'ptlc_Q0' // ptlc
global.eggs = '15'
global.loca = '1'

// SETTING APIKEY OPENAI & FILESTACK
global.fileStackApi = `AK5imWKw4QMeyD0g2ij2oz` // opsional - daftar di filestack

// APIKEY
global.skyzo = `refan`
global.lolkey = 'GataDios'
global.zeeone = `QIO8xicLNkEV43Y`

// SETTING GAME
global.gamewaktu = 60 // Game waktu
global.bmin = 1000 // Balance minimal 
global.bmax = 3000 // Balance maksimal
global.limit = 15 // Set limit
global.limitawal = {
premium: "Infinity",
free: 8000,
monayawal: 1000
}

// SETTING RPG
global.rpg = { // Bebas ubah value/angka
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
// DATABASE GAME
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};

// SETTING TELEGRAM BOT
global.BOT_TOKEN = '6622400:AAF8HlsJhluRAeA1ZvKUOhC_rWYLKBHfYx4' // isi token API bot telegram, buat botnya di @botfather
global.BOT_NAME = "User Bot" // your bot name
global.OWNER_NAME = "Official" // your name
global.OWNER_NUMBER = "62857243" // your telegram number
global.OWNER = ["https://t.me/Lyossh", "https://t.me/Lyossh"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai


// GLOBAL MIMETYPE
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'


// HOOKER STRING FONT
global.similarity = (one,two) => similarity(one,two);
global.transformText = transformText
global.transformText2 = transformText2
global.transformText3 = transformText3



// FUNCTION FONT STRING
async function similarity(one,two) {
const treshold = stringSimilarity.compareTwoStrings(one, two)
return treshold.toFixed(2)
}
//JANGAN DI UBAH ERROR
global.link = 'https://whatsapp.com/channel/0029VaF3SJt59PwSeWGC2a2D'
global.xbugtex = {
xtxt: 'Lyosh 🪽',
}
function transformText2(text) {
const charMap = {
'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ',
'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ',
'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ',
'0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿'};
return text.split('').map(char => {
return charMap[char.toUpperCase()] || char;
}).join(' ');}

function transformText3(text) {
  const charMap = {
    'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ',
    'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ',
    'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ',
    '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿'
  };
  return text.toUpperCase().split('').map(char => {
    return charMap[char] || char;
  }).join(' ');
}

function transformText(text) {
const charMap = {
'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ',
'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ',
'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ'};

return text.toUpperCase().split('').map(char => {
return charMap[char] || char;
}).join('');}
     
// RELOAD FILE UPDATE
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
