const { modul } = require("../module");
const {
  baileys,
  boom,
  chalk,
  fs,
  figlet,
  FileType,
  path,
  process,
  PhoneNumber,
} = modul;
const { Boom } = boom;
const Pino = require("pino");
const {
  default: makeWaSocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
  makeCacheableSignalKeyStore,
} = baileys;
const { color, bgcolor } = require("../lib/color");
const log = (pino = require("pino"));
const qrcode = require("qrcode");
const rimraf = require("rimraf");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
} = require("../lib/exif");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  await,
  sleep,
  reSize,
} = require("../lib/myfunc");
const store = makeInMemoryStore({
  logger: pino().child({ level: "silent", stream: "store" }),
});

if (global.conns instanceof Array) console.log();
else global.conns = [];

  const startbot = async (conn, m, from, number) => {
  const { sendImage, sendMessage } = conn;
  const { reply, sender } = m;
  const { state, saveCreds } = await useMultiFileAuthState(`./system/userclone/${m.sender}`);
  const { version, isLatest } = await fetchLatestBaileysVersion();
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });

  try {
    async function start() {
      let { version, isLatest } = await fetchLatestBaileysVersion();
      const conn = await makeWaSocket({
        auth: {
          creds: state.creds,
          keys: makeCacheableSignalKeyStore(
            state.keys,
            Pino({ level: "fatal" }).child({ level: "fatal" })
          ),
        },
        browser: ["Ubuntu","Chrome","20.0.04"],
        mobile: false,
        printQRInTerminal: false,
        markOnlineOnConnect: true,
        generateHighQualityLinkPreview: true,
        getMessage: async (key) => {
          if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id);
            return msg.message || undefined;
          }
          return {
            conversation: "Bot Here",
          };
        },
        logger: log({ level: "silent" }),
        version,
      });

      if (!(await conn.authState.creds.registered)) {
        if (!Object.keys(await baileys.PHONENUMBER_MCC).some((v) => number)) {
           sendMessage(from, { text: `*REQUEST CONNECTION*\n\n             *How To Install*\n*1*. masuk ke *perangkat tertaut*\n*2*. klik *tautkan perangkat*\n*3*. klik masukan *dengan nomor telpon saja*\n*4*. masukan *code* anda\n\n*COPY YOUR CODE*`},{quoted:m});

        }

        setTimeout(async () => {
          let codek = await conn.requestPairingCode(
            parseInt(await m.sender.replace(/[^0-9]/g, ""))
          );
          
          codek = codek?.match(/.{1,4}/g)?.join("-") || codek;
          sendMessage(from, { text: `${codek}` })
          console.log("code anda adalah: " + codek);
        }, 3000);
      }

      conn.ws.on("CB:Blocklist", (json) => {
        if (blocked.length > 2) return;
        for (let i of json[1].blocklist) {
          blocked.push(i.replace("c.us", "s.whatsapp.net"));
        }
      });

      conn.ws.on("CB:call", async (json) => {
        const callerId = json.content[0].attrs["call-creator"];
        const idCall = json.content[0].attrs["call-id"];
        const Id = json.attrs.id;
        const T = json.attrs.t;
        conn.sendNode({
          tag: "call",
          attrs: {
            from: global.owner,
            id: Id,
            t: T,
          },
          content: [
            {
              tag: "reject",
              attrs: {
                "call-creator": callerId,
                "call-id": idCall,
                count: "0",
              },
              content: null,
            },
          ],
        });
        if (json.content[0].tag == "offer") {
          let qutsnya = await conn.sendContact(callerId, global.owner);
          await conn.sendMessage(
            callerId,
            {
              text: `Block Automatic System!!!\nDon't Call Bot!!!\nPlease contact the owner to open the block!!!`,
            },
            { quoted: qutsnya }
          );
          await sleep(8000);
          await conn.updateBlockStatus(callerId, "block");
        }
      });

      conn.ev.on("messages.upsert", async (chatUpdate) => {
        try {
          kay = chatUpdate.messages[0];
          if (!kay.message) return;
          kay.message =
            Object.keys(kay.message)[0] === "ephemeralMessage"
              ? kay.message.ephemeralMessage.message
              : kay.message;
          if (kay.key && kay.key.remoteJid === "status@broadcast") return;
          if (
            !conn.public &&
            !kay.key.fromMe &&
            chatUpdate.type === "notify"
          )
            return;
          if (kay.key.id.startsWith("BAE5") && kay.key.id.length === 16) return;
          m = smsg(conn, kay, store);
          require("../kym")(conn, m, chatUpdate, store);
        } catch (err) {
          console.log(err);
        }
      });

      conn.public = true;
      store.bind(conn.ev);
      conn.ev.on("creds.update", saveCreds);
      conn.ev.on("connection.update", async (up) => {
        const { lastDisconnect, connection } = up;
        if (connection == "connecting") return;
        if (connection) {
          if (connection != "connecting")
            console.log("Connecting to bot..");
        }
        console.log(up);

        if (connection == "open") {
          conn.id = conn.decodeJid(conn.user.id);
          conn.time = Date.now();
          global.conns.push(conn);
          user = `${conn.decodeJid(conn.user.id)}`;
          txt = `@${user.split("@")[0]} mendaftar menjadi bot`;
          sendMessage(m.chat, {
            text: txt,
            mentions: [user],
          });
        }

        if (connection === "close") {
          let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
          if (reason === DisconnectReason.badSession) {
            console.log(
              `Bad Session File, Please Delete Session and Scan Again`
            );
            conn.logout();
            sendMessage(m.sender, {text: '*[ System Notice ]" menghapus session'})
          } else if (reason === DisconnectReason.connectionClosed) {
            console.log("Connection closed, reconnecting....");
            start();
          } else if (reason === DisconnectReason.connectionLost) {
            console.log("Connection Lost from Server, reconnecting...");
            start();
          } else if (reason === DisconnectReason.connectionReplaced) {
            console.log(
              "Connection Replaced, Another New Session Opened, Please Close Current Session First"
            );
            conn.logout();
          } else if (reason === DisconnectReason.loggedOut) {
            console.log(`Device Logged Out, Please Scan Again And Run.`);
            conn.logout();
          } else if (reason === DisconnectReason.restartRequired) {
            console.log("Restart Required, Restarting...");
            start();
            sendMessage(from, {text: '*[ System Notice ]* merestart'})
          } else if (reason === DisconnectReason.timedOut) {
            console.log("Connection TimedOut, Reconnecting...");
            start();
          } else
            conn.end(`Unknown DisconnectReason: ${reason}|${connection}`);
        }
      });

      conn.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
          let decode = jidDecode(jid) || {};
          return (
            (decode.user &&
              decode.server &&
              decode.user + "@" + decode.server) ||
            jid
          );
        } else return jid;
      };

      conn.ev.on("contacts.update", (update) => {
        for (let contact of update) {
          let id = conn.decodeJid(contact.id);
          if (store && store.contacts)
            store.contacts[id] = { id, name: contact.notify };
        }
      });

      conn.getName = (jid, withoutContact = false) => {
        id = conn.decodeJid(jid);
        withoutContact = conn.withoutContact || withoutContact;
        let v;
        if (id.endsWith("@g.us"))
          return new Promise(async (resolve) => {
            v = store.contacts[id] || {};
            if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {};
            resolve(
              v.name ||
                v.subject ||
                PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber(
                  "international"
                )
            );
          });
        else
          v =
            id === "0@s.whatsapp.net"
              ? {
                  id,
                  name: "WhatsApp",
                }
              : id === conn.decodeJid(conn.user.id)
              ? conn.user
              : store.contacts[id] || {};
        return (
          (withoutContact ? "" : v.name) ||
          v.subject ||
          v.verifiedName ||
          PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber(
            "international"
          )
        );
      };

      conn.parseMention = (text = "") => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
          (v) => v[1] + "@s.whatsapp.net"
        );
      };

      conn.sendContact = async (jid, kon, quoted = "", opts = {}) => {
        let list = [];
        for (let i of kon) {
          list.push({
            displayName: await conn.getName(i + "@s.whatsapp.net"),
            vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await conn.getName(i + "@s.whatsapp.net")}\n
FN:${await conn.getName(i + "@s.whatsapp.net")}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`,
          });
        }
        conn.sendMessage(
          jid,
          {
            contacts: { displayName: `${list.length} Contact`, contacts: list },
            ...opts,
          },
          { quoted }
        );
      };

      conn.sendImage = async (
        jid,
        path,
        caption = "",
        quoted = "",
        options
      ) => {
        let buffer = Buffer.isBuffer(path)
          ? path
          : /^data:.*?\/.*?;base64,/i.test(path)
          ? Buffer.from(path.split`,`[1], "base64")
          : /^https?:\/\//.test(path)
          ? await await getBuffer(path)
          : fs.existsSync(path)
          ? fs.readFileSync(path)
          : Buffer.alloc(0);
        return await conn.sendMessage(
          jid,
          { image: buffer, caption: caption, ...options },
          { quoted }
        );
      };

      conn.copyNForward = async (
        jid,
        message,
        forceForward = false,
        options = {}
      ) => {
        let vtype;
        if (options.readViewOnce) {
          message.message =
            message.message &&
            message.message.ephemeralMessage &&
            message.message.ephemeralMessage.message
              ? message.message.ephemeralMessage.message
              : message.message || undefined;
          vtype = Object.keys(message.message.viewOnceMessage.message)[0];
          delete (message.message && message.message.ignore
            ? message.message.ignore
            : message.message || undefined);
          delete message.message.viewOnceMessage.message[vtype].viewOnce;
          message.message = {
            ...message.message.viewOnceMessage.message,
          };
        }
        let mtype = Object.keys(message.message)[0];
        let content = await generateForwardMessageContent(
          message,
          forceForward
        );
        let ctype = Object.keys(content)[0];
        let context = {};
        if (mtype != "conversation")
          context = message.message[mtype].contextInfo;
        content[ctype].contextInfo = {
          ...context,
          ...content[ctype].contextInfo,
        };
        const waMessage = await generateWAMessageFromContent(
          jid,
          content,
          options
            ? {
                ...content[ctype],
                ...options,
                ...(options.contextInfo
                  ? {
                      contextInfo: {
                        ...content[ctype].contextInfo,
                        ...options.contextInfo,
                      },
                    }
                  : {}),
              }
            : {}
        );
        await conn.relayMessage(jid, waMessage.message, {
          messageId: waMessage.key.id,
        });
        return waMessage;
      };

      conn.sendButtonText = (
        jid,
        buttons = [],
        text,
        footer,
        quoted = "",
        options = {}
      ) => {
        let buttonMessage = {
          text,
          footer,
          buttons,
          headerType: 2,
          ...options,
        };
        conn.sendMessage(jid, buttonMessage, { quoted, ...options });
      };
      conn.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
};
    conn.sendteks = async(chatId, text = '', quoted = '', opts = {}) => {
return conn.sendMessage(chatId, { text: text, mentions: await conn.ments(text), ...opts}, {quoted:quoted})
};
  conn.sendImageAsSticker = async(jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await global.getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
conn.sendkontak = (from, teks, arr = [...[satu = "", dua = "", tiga = ""]], quoted = '', opts = {}) => {
return conn.sendMessage(from, { contacts: { displayName: teks, contacts: arr.map(i => ({displayName: '', vcard: 'BEGIN:VCARD\n'+'VERSION:3.0\n'+'FN:'+i[0]+'\n'+'ORG:'+i[2]+';\n'+'TEL;type=CELL;type=VOICE;waid='+i[1]+':'+i[1]+'\n'+'END:VCARD' })) }, ...opts}, {quoted})
}
conn.sendVideoAsSticker = async(jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await global.getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}


      
        conn.sendKatalog = async (
        jid,
        title = "",
        desc = "",
        gam,
        options = {}
      ) => {
        let message = await prepareWAMessageMedia(
          { image: gam },
          { upload: conn.waUploadToServer }
        );
        const tod = generateWAMessageFromContent(
          jid,
          {
            productMessage: {
              product: {
                productImage: message.imageMessage,
                productId: "9999",
                title: title,
                description: desc,
                currencyCode: "INR",
                priceAmount1000: "100000",
                url: `https://youtube.com/@Lyosh_`,
                productImageCount: 1,
                salePriceAmount1000: "0",
              },
              businessOwnerJid: `6283817421530@s.whatsapp.net`,
            },
          },
          options
        );
        return conn.relayMessage(jid, tod.message, {
          messageId: tod.key.id,
        });
      };

      conn.send5ButLoc = async (
        jid,
        text = "",
        footer = "",
        img,
        but = [],
        options = {}
      ) => {
        var template = generateWAMessageFromContent(
          jid,
          proto.Message.fromObject({
            templateMessage: {
              hydratedTemplate: {
                hydratedContentText: text,
                locationMessage: {
                  jpegThumbnail: img,
                },
                hydratedFooterText: footer,
                hydratedButtons: but,
              },
            },
          }),
          options
        );
        conn.relayMessage(jid, template.message, {
          messageId: template.key.id,
        });
      };

      conn.sendButImg = async (jid, path, teks, fke, but) => {
        let img = Buffer.isBuffer(path)
          ? path
          : /^data:.*?\/.*?;base64,/i.test(path)
          ? Buffer.from(path.split`,`[1], "base64")
          : /^https?:\/\//.test(path)
          ? await await getBuffer(path)
          : fs.existsSync(path)
          ? fs.readFileSync(path)
          : Buffer.alloc(0);
        let fjejfjjjer = {
          image: img,
          jpegThumbnail: img,
          caption: teks,
          fileLength: "1",
          footer: fke,
          buttons: but,
          headerType: 4,
        };
        conn.sendMessage(jid, fjejfjjjer, { quoted: m });
      };

      conn.setStatus = (status) => {
        conn.query({
          tag: "iq",
          attrs: {
            to: "@s.whatsapp.net",
            type: "set",
            xmlns: "status",
          },
          content: [
            {
              tag: "status",
              attrs: {},
              content: Buffer.from(status, "utf-8"),
            },
          ],
        });
        return status;
      };
// FUNCTION MAKE STICKER
conn.imgToSticker = async(from, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await conn.sendMessage(from, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

conn.vidToSticker = async(from, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await conn.sendMessage(from, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

      conn.downloadAndSaveMediaMessage = async (
        message,
        filename,
        attachExtension = true
      ) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || "";
        let messageType = message.mtype
          ? message.mtype.replace(/Message/gi, "")
          : mime.split("/")[0];
        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk]);
        }
        let type = await FileType.fromBuffer(buffer);
        trueFileName = attachExtension ? filename + "." + type.ext : filename;
        await fs.writeFileSync(trueFileName, buffer);
        return trueFileName;
      };

      conn.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || "";
        let messageType = message.mtype
          ? message.mtype.replace(/Message/gi, "")
          : mime.split("/")[0];
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
      };

      conn.sendText = (jid, text, quoted = "", options) =>
        conn.sendMessage(jid, { text: text, ...options }, { quoted });
    }
    await start();
  } catch (e) {
    console.log(e);
  }
};

module.exports = { startbot, conns };

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
