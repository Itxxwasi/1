//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "254742215053@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "254742215053";
global.owner = process.env.OWNER_NUMBER || "254742215053";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";"=="
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdnOW9WOWU0ODJmbGlQUTBCUXNKaWRHQWFLZ1RKbm90ajZiZGw2UFlIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlh2RjNrNTIvY2JYNmVqZ3A4NnVXd3lMZHErZ2hnMGxkcEdId2FrbTBsMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRERKbTQrUUh2TUJzTkwrZGxBbDAwVFliQUY2cmNBUWJtVDI5ZEh6VDFrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0RDNlcTlWNFowb2ZrZUxEaEwrVEdwOHF3aU85M1JiOHl3ZXZFbm5lTXdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVHV21PSUNMU3ZwbHhHWXB2Q1EvdUJEaVdwTFkxR3A5N2E5Mm5FMWFWRkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZrVVczYklVQXFpS2ZoWDJsMUhHRmJLcnNQaThWdDNMdnFqT2JtY1NFWDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia04yTmFPY3NlUTZlZlR0L0JSQ1l2VnlhZ3RESTZVWjZFeElJa3hkOURuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZytOZ1M3bjJoSnJjQVpZeklTdzN1cGY4Skx1MmQ5dnZBbDM4RWxuNHUxST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpSalR4TXh3S3ZmNHpScnZQdEtNMFptSEFUcmEyZXRJZHhmY24xdjlsZ1pOYmc0Wlk4UzJwWjRWV3hVZ3dxdk5vTEhwZVAwL094UTV1eUlCOUp1Nmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6ImlzZVZhNGh5ZWxvWmh3VkxhbnIrbmJmeEJUaElqNnZXb1RWdSsySmVZTWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0Nzk1MjA2NDMwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc0REM1NkU2N0ZENjVGODAxOUMzQzE5NDE2MDQyMTQyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM3MjQ4MDF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5NTIwNjQzMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwNDNEQzVGRDUxOEM3MTUwNzZCREMwMkFFRUNCNTAzMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzNzI0ODAzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZOEhiX3RiVlJBVzdZZFl1YjVXWTV3IiwicGhvbmVJZCI6Ijk1NjBjMDg0LTFkOTEtNDkxOS04N2U2LTBjMGQ4YmE1MTM2YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1c1lYQVpBVVVrZW9GTzVCSUgxRzdxdmtyZEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ZsZEFxTnRBZTdMdUpINkhDVzlEOXFCeTVNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhCUzhBWlBXIiwibWUiOnsiaWQiOiIyNTQ3OTUyMDY0MzA6MTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2hlenkgQmFoYXRpIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOT1A2L0lCRU8vbjk3VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYMDVtNGJYNWx5Nis0QVlIdVhBVUs2UHJiMEF5NTEyN1ZudUk5SWs4K2dZPSIsImFjY291bnRTaWduYXR1cmUiOiJ3SGhNMHBRbHZKK0QvQnl6ZWVRS1U4MXRVK0FyYXlYU24rUkVpU2FCZjFQUkI5RnpOWngvTk9QNWU3ZXNtRXNhaVQ0bWNBZWZMa2pKaDRFdENJc29Ddz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQThJSWkvQzJGYzl0eXJ1NVl6ZzdPcUl6LzBoOTV0WlpocXVFdlRobUM2bjB5UjFYeVVxN1JhejZIUk9EbEZ5ZUFSUnhKUVdTRWRtOFVtdE5zU2ZQZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3OTUyMDY0MzA6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjlPWnVHMStaY3V2dUFHQjdsd0ZDdWo2MjlBTXVkZHUxWjdpUFNKUFBvRyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzcyNDc5OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGbDkifQ============"
  
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-SHADOW🌚-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "SAMARA-MD😂",
  ownername: process.env.OWNER_NAME || "SMR🙄💀",
  errorChat: process.env.ERROR_CHAT || "254742215053",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
