const chalk = require('chalk')
const fs = require('fs')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

// MENU UTAMA
global.menuutama = (prefix, m, sender, command, latensi, isCreator, isPremium, Filesize, tag) => {
return `
           _*M E N U   B O T*_

> • ${prefix+command} all
> • ${prefix+command} fun
> • ${prefix+command} rpg
> • ${prefix+command} tools
> • ${prefix+command} bug
> • ${prefix+command} shop
> • ${prefix+command} game
> • ${prefix+command} anime
> • ${prefix+command} group
> • ${prefix+command} owner
> • ${prefix+command} primbon
> • ${prefix+command} convert
> • ${prefix+command} ephoto
> • ${prefix+command} search
> • ${prefix+command} chatbot
> • ${prefix+command} jadibot
> • ${prefix+command} photoxy
> • ${prefix+command} random
> • ${prefix+command} textpro
> • ${prefix+command} audio
> • ${prefix+command} sound
> • ${prefix+command} download

🏴 _Kym Version Lyosh_\n_Privat [Beta] Script_
`}
global.menubug = (prefix) => {
return `
            _*B U G  B O T*_
            
  • ${prefix}xreact <reply chat>
  • ${prefix}x <number|amount>
  • ${prefix}x2 <amount>
  • ${prefix}iosbug <number|amount>
  • ${prefix}iosbug2 <amount>
  • ${prefix}xaudio <number|amount>
  • ${prefix}xaudio2 <amount>
  • ${prefix}xsticker <number|amount>
  • ${prefix}xsticker2 <amount>
  • ${prefix}xloc <number|amount>
  • ${prefix}xloc2 <amount>
  • ${prefix}xlist <number|amount>
  • ${prefix}xlist2 <amount>
  • ${prefix}xkill <number|amount>
  • ${prefix}xkill2 <amount>
  • ${prefix}xkillgc <link group>
  • ${prefix}tempban <code|number>
  • ${prefix}xcrash <number>
  • ${prefix}xcrash2 <amount>
  • ${prefix}xioscrash <number>
  • ${prefix}xioscrash2 <amount>
  • ${prefix}iosgoogle <number>
  • ${prefix}iosgoogle2 <amount>
  • ${prefix}iosq <number>
`}

global.menustore = (prefix) => {
return `
           _*M E N U   S T O R E*_

> • ${prefix} panel
> • ${prefix} nokos
> • ${prefix} vps
> • ${prefix} _comingsoon_
> • ${prefix} _comingsoon_
`
}

global.pushkontak = (prefix) => {
return `
            _*P U S H  K O N T A K*_
            
> _Version Text Biasa_
  • ${prefix}pushkontak [version text]
  • ${prefix}pushkontak2 [version idgc]
  
> _Version Yang Ada Gambar_
  • ${prefix}pushkontak3 [version text]
  • ${prefix}pushkontak4 [version idgc]
  • ${prefix}pushkontak5 [version idgc + text + button link]
  • ${prefix}pushkontak6 [version idgc + text + button biasa]
  • ${prefix}pushkontak7 [version idgc + text + button copy]
  • ${prefix}pushkontak8 [version idgc + text + button telpon]
  • ${prefix}pushkontak9 [version idgc + text + burton list]
  
> _Version Yang Ada Video_
  • ${prefix}pushkontak10 [version text]
  • ${prefix}pushkontak11 [version idgc]
  • ${prefix}pushkontak12 [version idgc + text + button link]
  • ${prefix}pushkontak13 [version idgc + text + button biasa]
  • ${prefix}pushkontak14 [version idgc + text + button copy]
  • ${prefix}pushkontak15 [version idgc + text + button telpon]
  • ${prefix}pushkontak16 [version idgc + text + burton list]
`}
// MENU RANDOM PHOTO 
global.menurandom = (prefix) => {
return `
            _*R A N D O M   P H O T O*_
            
  • ${prefix}hijab
  • ${prefix}indo
  • ${prefix}confess *nomor|nama|pesan*
  • ${prefix}menfess *nomor|nama|pesan*
  • ${prefix}japanese
  • ${prefix}korean
  • ${prefix}malay
  • ${prefix}randomgirl
  • ${prefix}randomboy
  • ${prefix}thai
  • ${prefix}vietnamese
  • ${prefix}aesthetic
  • ${prefix}chinese
  • ${prefix}pubg
  • ${prefix}antiwork
  • ${prefix}blackpink2
  • ${prefix}cosplay
  • ${prefix}cat
  • ${prefix}doggo
  • ${prefix}justina
  • ${prefix}kayes
  • ${prefix}bike
  • ${prefix}boneka
  • ${prefix}kpop
  • ${prefix}notnot
  • ${prefix}car
  • ${prefix}rose
  • ${prefix}ryujin
  • ${prefix}ulzangboy
  • ${prefix}ulzanggirl
  • ${prefix}mobilelegend

`}

// MENU NSFW
global.menunsfw = (prefix) => {
return `
            _*N S F W*_
            
  • ${prefix}dlychan
  • ${prefix}hana
  • ${prefix}merial
  • ${prefix}Mihye
  • ${prefix}nanaqi
  • ${prefix}NguyenXHuang
  • ${prefix}Noname
  • ${prefix}nude
  • ${prefix}okita
  • ${prefix}onlyfans
  • ${prefix}onlyfansvid
  • ${prefix}quan
  • ${prefix}umekoj
  • ${prefix}yoshinobi
  • ${prefix}hentai  
  • ${prefix}hentaivid  
  • ${prefix}hneko  
  • ${prefix}nwaifu  
  • ${prefix}animespank  
  • ${prefix}gasm
  • ${prefix}cuckold  
  • ${prefix}cum  
  • ${prefix}milf  
  • ${prefix}eba  
  • ${prefix}ero  
  • ${prefix}manga  
  • ${prefix}pussy  
  • ${prefix}tentacles 
  • ${prefix}yuri  
  • ${prefix}zettai
    

      _*O T H E R S*_

  • ${prefix}bokep1-27
  • ${prefix}art
  • ${prefix}paptt
  • ${prefix}awoo
  • ${prefix}hentaivid
  • ${prefix}hentaivid2
  • ${prefix}xnxxs *judul*
  • ${prefix}xnxxdl *link*

`}

// MENU TOOLS
global.menutools = (prefix) => {
return `
            _*O W N E R    T O O L S*_

  • ${prefix}ping
  • ${prefix}hdvideo  
  • ${prefix}runtime
  • ${prefix}opsichatpc *nomor*
  • ${prefix}opsichatgc *id*
  • ${prefix}addcase *code*
  • ${prefix}delcase *command*
  • ${prefix}addsewa *link + time*
  • ${prefix}listsewa
  • ${prefix}checksewa
  • ${prefix}hdvideo
  • ${prefix}delsewa
  • ${prefix}ebase64 *text/code*
  • ${prefix}debase64 *base64*
  • ${prefix}ehex *text/code*
  • ${prefix}dehex *hex*
  • ${prefix}restart *restart bot*
  • ${prefix}shutdown *mati*
  • ${prefix}buatgc *namanya*
  • ${prefix}ipbot
  • ${prefix}shortlink *url*
  • ${prefix}ebinary *text*
  • ${prefix}dbinary *text*
  • ${prefix}clearjdb
  • ${prefix}getdb
  • ${prefix}delsampah
  • ${prefix}encrypt *text/code*
  • ${prefix}ban
  • ${prefix}nowa *nomor*
  • ${prefix}banned *mention or reply*
  • ${prefix}call *telepon*
  • ${prefix}spamsms *pesan spam*
  • ${prefix}gantifile *nama file*
  • ${prefix}delfolder *nama folder*
  • ${prefix}nomor-wa *nomornya*
  • $ *exec*
  • > 

`
}

// MENU ASUPAN
global.menuasupan = (prefix) => {
return `
            _*A S U P A N*_

  • ${prefix}asupan1-20
  • ${prefix}tiktokgirl
  • ${prefix}tiktoknukthy
  • ${prefix}tiktokkayes
  • ${prefix}tiktokpanrika
  • ${prefix}tiktoknotnot
  • ${prefix}tiktokghea 
  • ${prefix}tiktoksantuy 
  • ${prefix}tiktokbocil 

`
}

// MENU PHOTOOXY
global.menuphotoxy = (prefix) => {
return `
            _*P H O T O O X Y*_

  • ${prefix}shadow *text*
  • ${prefix}write *text*
  • ${prefix}romantic *text*
  • ${prefix}burnpaper *text*
  • ${prefix}smoke *text*
  • ${prefix}narutobanner *text*
  • ${prefix}love *text*
  • ${prefix}undergrass *text*
  • ${prefix}doublelove *text*
  • ${prefix}coffecup *text*
  • ${prefix}underwaterocean *text*
  • ${prefix}smokyneon *text*
  • ${prefix}starstext *text*
  • ${prefix}rainboweffect *text*
  • ${prefix}balloontext *text*
  • ${prefix}metalliceffect *text*
  • ${prefix}embroiderytext *text*
  • ${prefix}flamingtext *text*
  • ${prefix}stonetext *text*
  • ${prefix}writeart *text*
  • ${prefix}summertext *text*
  • ${prefix}wolfmetaltext *text*
  • ${prefix}nature3dtext *text*
  • ${prefix}rosestext *text*
  • ${prefix}naturetypography *text*
  • ${prefix}quotesunder *text*
  • ${prefix}shinetext *text*

`
}

// MENU CLONE BOT
global.menujadibot = (prefix) => {
return `
            _*J A D I   B O T*_

  • ${prefix}jadibot *waktu*
  • ${prefix}stop *mematikan*
  • ${prefix}start *memulai*
  • ${prefix}listjadibot
  • ${prefix}delsession
  • ${prefix}getsession
  • ${prefix}carajadibot

`
}

// MENU TEXT PRO
global.menutextpro = (prefix) => {
return `
            _*T E X T  M A K E R*_

  • ${prefix}blackpink *text*
  • ${prefix}neon *text*
  • ${prefix}greenneon *text*
  • ${prefix}advanceglow *text*
  • ${prefix}futureneon *text*
  • ${prefix}sandwriting *text*
  • ${prefix}sandsummer *text*
  • ${prefix}sandengraved *text*
  • ${prefix}metaldark *text*
  • ${prefix}neonlight *text*
  • ${prefix}holographic *text*
  • ${prefix}text1917 *text*
  • ${prefix}minion *text*
  • ${prefix}deluxesilver *text*
  • ${prefix}newyearcard *text*
  • ${prefix}bloodfrosted *text*
  • ${prefix}halloween *text*
  • ${prefix}jokerlogo *text*
  • ${prefix}fireworksparkle *text*
  • ${prefix}natureleaves *text*
  • ${prefix}bokeh *text*
  • ${prefix}toxic *text*
  • ${prefix}strawberry *text*
  • ${prefix}box3d *text*
  • ${prefix}roadwarning *text*
  • ${prefix}breakwall *text*
  • ${prefix}icecold *text*
  • ${prefix}luxury *text*
  • ${prefix}cloud *text*
  • ${prefix}summersand *text*
  • ${prefix}horrorblood *text*
  • ${prefix}thunder *text*

`
}

// MENU OWNER
global.menuowner = (prefix) => {
return `
           _*O W N E R*_

  • ${prefix}public
  • ${prefix}self
  • ${prefix}bc
  • ${prefix}warcallid *id|text*
  • ${prefix}cleardb
  • ${prefix}adduserdb *reply*
  • ${prefix}deluserdb *reply*
  • ${prefix}adduserdbgc
  • ${prefix}listdbuser
  • ${prefix}unbanned *mention or reply*
  • ${prefix}addprem *mention or reply*
  • ${prefix}delprem *mention or reply*
  • ${prefix}setprefix *symbol*
  • ${prefix}setcover *link photo*
  • ${prefix}setppbot *reply photo*
  • ${prefix}delppbot
  • ${prefix}block *mention or reply*
  • ${prefix}unblock *mention or reply*
  • ${prefix}listblock
  • ${prefix}listpc
  • ${prefix}listgc
  • ${prefix}listonline   
  • ${prefix}delchat
  • ${prefix}readvo *reply viewonce*
  • ${prefix}setnamabot *nama*
  • ${prefix}setbiobot *bionya*
  • ${prefix}setthumb *gambar*
  • ${prefix}welcome *on / off*
  • ${prefix}anticall *on / off*
  • ${prefix}antilink *on / off*
  • ${prefix}autoai *on / off*
  • ${prefix}autodownload *on / off*
  • ${prefix}auto-ai *on / off*
  • ${prefix}anticall *on / off*
  • ${prefix}autoreadsw *on / off*

`
}

// MENU SEARCH
global.menusearch = (prefix) => {
return `
            _*S E A R C H*_

  • ${prefix}play *text*
  • ${prefix}spotify *title*
  • ${prefix}spotifysearch *title*
  • ${prefix}pinterest *text*
  • ${prefix}ytvideo *text*
  • ${prefix}yts *querry*
  • ${prefix}ssweb *link*
  • ${prefix}google *text*
  • ${prefix}nontontv
  • ${prefix}ttsearch *username*
  • ${prefix}ghstalk *username*
  • ${prefix}igstalk *username*
  • ${prefix}tiktokstalk *username*
  • ${prefix}npmsearch *pack name*
  • ${prefix}weather *lokasi*
  • ${prefix}aiimg *text*
  • ${prefix}gimage *text*
  • ${prefix}textimg *prompt*
  • ${prefix}bingimg *prompt*
  • ${prefix}translate *reply text*
  • ${prefix}jarak *kota|kota*
  • ${prefix}lirik *judul lagu*
  • ${prefix}xnxxs *title*
  • ${prefix}pornhubgif *judul*
  • ${prefix}animesearch *title*
  • ${prefix}otakudesu *title*
  • ${prefix}hentaisearch *judul :D*

`
}
// MENU CHATBOT
global.menuchatbot = (prefix) => {
return `
            _*C H A T  - G P T*_

  • ${prefix}ai *ask*
  • ${prefix}ai2 *ask*
  • ${prefix}ai4 *ask*
  • ${prefix}bard *ask*
  • ${prefix}hutao *ask*
  • ${prefix}miku *ask*
    

            _*D I F F U S I O N*_

  • ${prefix}toanime *reply foto*
  • ${prefix}bingimg *prompt*
  • ${prefix}diffusion *prompt*
  • ${prefix}remini *reply gambar*
  • ${prefix}txt2img *prompt*
  • ${prefix}jadi *modelnya*
  • ${prefix}differentme *modelnya*

`
}

// MENU CONVERT
global.menuconvert = (prefix) => {
return `
            _*C O N V E R T*_

  • ${prefix}say *text*
  • ${prefix}toonce *media*
  • ${prefix}smeme *image & text*
  • ${prefix}qc *text*
  • ${prefix}qcimg *text*
  • ${prefix}smeta *reply sticker*
  • ${prefix}sticker *reply image/video*
  • ${prefix}toimg *reply sticker*
  • ${prefix}toptv *reply video*
  • ${prefix}tomp4 *reply sticker*
  • ${prefix}toaudio *reply video*
  • ${prefix}tomp3 *reply video*
  • ${prefix}togif *reply video*
  • ${prefix}toqr *link or text*
  • ${prefix}tovn *reply audio*
  • ${prefix}remini *reply gambar*

`
}

// MENU DOWNLOAD
global.menudownload = (prefix) => {
return `
            _*D O W N L O A D*_

  • ${prefix}ytsearch *judul*
  • ${prefix}ytreels *link*
  • ${prefix}getmusic *reply yts*
  • ${prefix}getvideo *reply yts*
  • ${prefix}ytvideo *judul video*
  • ${prefix}ytmp3 *link youtube*
  • ${prefix}ytmp4 *link youtube*
  • ${prefix}ytdok *link youtube*
  • ${prefix}ytvn *link youtube*
  • ${prefix}ytvideo *link youtube*
  • ${prefix}tiktok *link tiktok*
  • ${prefix}igdl *link* 
  • ${prefix}capcutdl *link*
  • ${prefix}megadl *link*
  • ${prefix}fbdl *link*
  • ${prefix}spotifydl *link*
  • ${prefix}igdl *link*
  • ${prefix}gitclone *link*
  • ${prefix}mediafire *link*
  • ${prefix}happymod *game name*
  • ${prefix}gdrive *link*

`
}

// MENU EPHOTO
global.menuephoto = (prefix) => {
return `
            _*E P H O T O*_

  • ${prefix}credit
  • ${prefix}glitchtext *text*
  • ${prefix}writetext *text*
  • ${prefix}advancedglow *text*
  • ${prefix}typographytext *text*
  • ${prefix}pixelglitch *text*
  • ${prefix}neonglitch *text*
  • ${prefix}flagtext *text*
  • ${prefix}flag3dtext *text*
  • ${prefix}deletingtext *text*
  • ${prefix}blackpinkstyle *text*
  • ${prefix}glowingtext *text*
  • ${prefix}underwatertext *text*
  • ${prefix}logomaker *text*
  • ${prefix}cartoonstyle *text*
  • ${prefix}papercutstyle *text*
  • ${prefix}watercolortext *text*
  • ${prefix}effectclouds *text*
  • ${prefix}blackpinklogo *text*
  • ${prefix}gradienttext *text*
  • ${prefix}summerbeach *text*
  • ${prefix}luxurygold *text*
  • ${prefix}multicoloredneon *text*
  • ${prefix}sandsummer *text*
  • ${prefix}galaxywallpaper *text*
  • ${prefix}1917style *text*
  • ${prefix}makingneon *text*
  • ${prefix}royaltext *text*
  • ${prefix}freecreate *text*
  • ${prefix}galaxystyle *text*
  • ${prefix}lighteffects *text*

`
}

// MENU PRIMBON GAME
global.menuprimbon = (prefix) => {
return `
            _*P R I M B O N*_

  • ${prefix}credit
  • ${prefix}artinama *text*
  • ${prefix}artimimpi *text*
  • ${prefix}kecocokanpasangan *text*
  • ${prefix}kecocokannama *text*
  • ${prefix}jadianpernikahan *text*
  • ${prefix}rezeki *text*
  • ${prefix}sifatusaha *text*
  • ${prefix}pekerjaan *text*
  • ${prefix}artitarot *text*
  • ${prefix}potensipenyakit *text*
  • ${prefix}ramalannasib *text*
  • ${prefix}harisangar *text*
  • ${prefix}haribaik *text*
  • ${prefix}fengshui *text*
  • ${prefix}nagahari *text*
  • ${prefix}harinaas *text*
  • ${prefix}weton *text*
  • ${prefix}peruntungan *text*
  • ${prefix}arahrejeki *text*
  • ${prefix}sifat *text*
  • ${prefix}kebetuntungan *text*
  • ${prefix}memancing *text*
  • ${prefix}masasubur *text*
  • ${prefix}zodiak *text*
  • ${prefix}shio *text*

`
}

// MENU GROUP
global.menugroup = (prefix) => {
return `
            _*G R O U P*_

  • ${prefix}credit
  • ${prefix}rules
  • ${prefix}getsider
  • ${prefix}totalfitur
  • ${prefix}boostgc
  • ${prefix}warcall *text*
  • ${prefix}getcontact *tag*
  • ${prefix}sendcontact *tag*
  • ${prefix}contacttag *tag*
  • ${prefix}kontakme
  • ${prefix}menfess *pesannya*
  • ${prefix}setcmd *command*
  • ${prefix}listcmd
  • ${prefix}delcmd *command*
  • ${prefix}timergc *waktu*
  • ${prefix}afk *alasan*
  • ${prefix}tagall *text*
  • ${prefix}kudeta *berbahaya*
  • ${prefix}idgc
  • ${prefix}promoteall *adminkan semua*
  • ${prefix}demoteall *unadmin semua*
  • ${prefix}hidetag *text*
  • ${prefix}cekgc *link*
  • ${prefix}ppcp/couple
  • ${prefix}getname *mention or reply*
  • ${prefix}getpp *mention or reply*
  • ${prefix}getbio *mention or reply*
  • ${prefix}delete *reply pesan*
  • ${prefix}promote *mention or reply*
  • ${prefix}demote *mention or reply*
  • ${prefix}add *number*
  • ${prefix}kick *mention or reply*
  • ${prefix}infogrup
  • ${prefix}linkgrup
  • ${prefix}grup *open / close*
  • ${prefix}revoke 
  • ${prefix}join *link group*
  • ${prefix}left 
  • ${prefix}setppgrup *reply photo*
  • ${prefix}setgrupname *text*
  • ${prefix}setdesc *text*
  • ${prefix}pushkontakfrom *text*

`
}

// MENU ANIME
global.menuanime = (prefix) => {
return `
            _*A N I M E*_

  • ${prefix}cogan
  • ${prefix}elaina2
  • ${prefix}exo
  • ${prefix}elf
  • ${prefix}estetic
  • ${prefix}kanna
  • ${prefix}loli
  • ${prefix}shota
  • ${prefix}husbu
  • ${prefix}sagiri
  • ${prefix}shinobu
  • ${prefix}megumin
  • ${prefix}wallnime
  • ${prefix}neko
  • ${prefix}waifu
  • ${prefix}kill
  • ${prefix}pat
  • ${prefix}lick
  • ${prefix}bite
  • ${prefix}yeet
  • ${prefix}bonk
  • ${prefix}wink
  • ${prefix}poke
  • ${prefix}nom
  • ${prefix}slap
  • ${prefix}smile
  • ${prefix}wave
  • ${prefix}blush
  • ${prefix}smug
  • ${prefix}glomp
  • ${prefix}happy
  • ${prefix}dance
  • ${prefix}cringe
  • ${prefix}highfive
  • ${prefix}handhold
  • ${prefix}akira 
  • ${prefix}akiyama 
  • ${prefix}ana 
  • ${prefix}asuna 
  • ${prefix}ayuzawa 
  • ${prefix}boruto 
  • ${prefix}chiho 
  • ${prefix}chitoge 
  • ${prefix}cosplayloli 
  • ${prefix}cosplaysagiri 
  • ${prefix}deidara 
  • ${prefix}doraemon 
  • ${prefix}elena
  • ${prefix}emilia 
  • ${prefix}erza 
  • ${prefix}gremory 
  • ${prefix}hestia 
  • ${prefix}hinata 
  • ${prefix}husbu 
  • ${prefix}inori 
  • ${prefix}isuzu 
  • ${prefix}itachi 
  • ${prefix}itori 
  • ${prefix}kaga 
  • ${prefix}kagura 
  • ${prefix}kakasih 
  • ${prefix}kaori 
  • ${prefix}keneki 
  • ${prefix}kotori 
  • ${prefix}kurumi 
  • ${prefix}loli 
  • ${prefix}madara 
  • ${prefix}megumin 
  • ${prefix}mikasa 
  • ${prefix}mikey 
  • ${prefix}miku 
  • ${prefix}minato 
  • ${prefix}naruto 
  • ${prefix}neko 
  • ${prefix}neko2 
  • ${prefix}nekonime 
  • ${prefix}nezuko 
  • ${prefix}onepiece 
  • ${prefix}pokemon 
  • ${prefix}randomnime 
  • ${prefix}randomnime2 
  • ${prefix}rize 
  • ${prefix}sagiri 
  • ${prefix}sakura 
  • ${prefix}sasuke 
  • ${prefix}shina 
  • ${prefix}shinka 
  • ${prefix}shinomiya 
  • ${prefix}shizuka 
  • ${prefix}shota 
  • ${prefix}tejina 
  • ${prefix}toukachan 
  • ${prefix}tsunade 
  • ${prefix}waifu 
  • ${prefix}animewall 
  • ${prefix}yotsuba 
  • ${prefix}yuki 
  • ${prefix}yulibocil 
  • ${prefix}yumeko
  • ${prefix}8ball
  • ${prefix}tickle
  • ${prefix}gecg
  • ${prefix}feed

`
}

// MENU RPG GAMES
global.menurpg = (prefix) => {
return `
            _*R P G    G A M E S*_

`
}

// MENU SOUND
global.menusound = (prefix) => {
return `
            _*S O U N D*_

  • ${prefix}sound1
  • ${prefix}sound2
  • ${prefix}sound3
  • ${prefix}sound4
  • ${prefix}sound5
  • ${prefix}sound6
  • ${prefix}sound7 - 161

`}

// MENU AUDIO
global.menuaudio = (prefix) => {
return `
            _*A U D I O*_  

  • ${prefix}addvn *audio*
  • ${prefix}listvn *audio*
  • ${prefix}delvn *audio*
  • ${prefix}bass *reply audio*
  • ${prefix}deep *reply audio*
  • ${prefix}slow *reply audio*
  • ${prefix}blown
  • ${prefix}smooth
  • ${prefix}earrape
  • ${prefix}fast
  • ${prefix}fat
  • ${prefix}reverse
  • ${prefix}nightcore
  • ${prefix}robot
  • ${prefix}squirrel

`
}

// MENU GAME
global.menugame = (prefix) => {
return `
             _*G A M E*_  

  • ${prefix}werewolf
  • ${prefix}suit *tag atau reply*
  • ${prefix}tictactoe *tag atau reply*
  • ${prefix}delttt
  • ${prefix}petakbom
  • ${prefix}delpetakbom
  • ${prefix}tebakgambar
  • ${prefix}tebakanime
  • ${prefix}tebakkabupaten
  • ${prefix}tebaklagu
  • ${prefix}kuis
  • ${prefix}tebakkalimat
  • ${prefix}tebakkata
  • ${prefix}tebaklirik
  • ${prefix}tebakkimia
  • ${prefix}tebakbendera
  • ${prefix}susunkata
  • ${prefix}asahotak
  • ${prefix}siapakahaku
  • ${prefix}caklontong
  • ${prefix}math
  • ${prefix}family100

`
}

// MENU SHOP
global.menushop = (prefix) => {
return `
            _*S H O P   S H O P*_  

  • ${prefix}saldo *lihat saldo anda*
  • ${prefix}ceksaldo *tag/reply*
  • ${prefix}transfer *reply + nominal*
  • ${prefix}topup *nominal*
  • ${prefix}cekmin *bukti prabayar*
  • ${prefix}belipanel *lakukan pembelian*
  • ${prefix}addusr *beli user panel anda*
  • ${prefix}buyserver *beli server user*
  • ${prefix}addusr *gratis buat user*
  • ${prefix}addsrv *gunakan saldo*
  • ${prefix}addusradmin *untuk creator*
  • ${prefix}addsaldo *untuk creator*
  • ${prefix}listpanel *lihat harga*
  • ${prefix}listvps  *lihat harga*
  • ${prefix}listusr *data user*
  • ${prefix}listsrv *data server*
  • ${prefix}startsrv *ID server*
  • ${prefix}stopsrv *ID server*
  • ${prefix}addlist *tambah list*
  • ${prefix}dellist *hapus list*
  • ${prefix}updatelist *edit list*
  • ${prefix}list *tampilkan list*
  • ${prefix}tambah
  • ${prefix}kali
  • ${prefix}kurang
  • ${prefix}bagi

`
}

// MENU FUN ASK
global.menufun = (prefix) => {
return `
            _*F U N  A S K*_  

  • ${prefix}createqr *text*
  • ${prefix}detectqr *reply qr*
  • ${prefix}apakah *text*
  • ${prefix}bagaimanakah *text*
  • ${prefix}kapankah *text*
  • ${prefix}bisakah *text
  • ${prefix}sangecek *tag*
  • ${prefix}cantikcek *tag*
  • ${prefix}gantengcek *tag*
  • ${prefix}jomokcek *tag*
  • ${prefix}wangy *tag*
  • ${prefix}rate
  • ${prefix}tolol
  • ${prefix}goblog
  • ${prefix}goblok
  • ${prefix}idiot
  • ${prefix}gay
  • ${prefix}jomok
  • ${prefix}bajingan
  • ${prefix}munafik
  • ${prefix}kontol
  • ${prefix}yatim
  • ${prefix}poke
  • ${prefix}pembokep
  • ${prefix}hitam
  • ${prefix}jawa
  • ${prefix}wibu
  • ${prefix}stress
  • ${prefix}miskin
  • ${prefix}cantik
  • ${prefix}manis
  • ${prefix}babi
  • ${prefix}ganteng
  • ${prefix}cina
  • ${prefix}atheis
  • ${prefix}papua
  • ${prefix}nigga
  • ${prefix}pengentot
  • ${prefix}seksi
  • ${prefix}kawai
  • ${prefix}tercindo
  • ${prefix}fembokef
  • ${prefix}pengocok
  • ${prefix}cabul
  • ${prefix}fuckboy
  • ${prefix}playboy
  • ${prefix}sange
  • ${prefix}sangean
  • ${prefix}hot

`
}