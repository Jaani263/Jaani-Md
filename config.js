const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923121407277";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923121407277,923263409442";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_40_03_29_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTUNtL2tyYVFPWjI1T2cvZ0FPODVWdmdBdTFsYlFLZDc4MlRZSlFFV3Fraz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImhpblV6SU1NREs1OFlhMVZrbDBod3F5R1Iwek5nSHYvNm1LRjdTamxsMU09XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaURvZXhGTDhvbFcxbWRZUEZQZE0vRjU0Snpma0lNNDVhZ0RZcStHcUxuRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImFUYnlaNXN3L2xJTkxqaFN2YUNJWFlNeGVTSU9lWm5sdEVWWlVoM2MzeGM9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid0VvRVo1WGFocUl3Zkl0YmRBNkhMMDFZRjN1WHFTQm5XcXpMN3ZPVWdXND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInEvenBpVExzSWMxK1UxVDN1TGMyNk5JaXJ6TWlqVjlLYjB1UldnODNoZ3c9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJrRS9Nc0UrYlBLZGRETW9ieTRZQ0hGbzZqTGJMQUoycVlobHBKOHFoOUhNPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNnFMQUJLWUNCLzFhY29kd3I3YjZSR1BuVHhzdDB2SHAralR1QlVzdUUyTT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJsNTcyMmpvZFRYVlhqSHRiR1l4aTJyZkUva1BXTks4bTI4cHZ5MGNUYUVNcDc0Qm9WczdvMkM2OFFCamlsL0ZDQTVOMnl4RDNXTXZLVk4zVmJyYlJpQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjM1LFwiYWR2U2VjcmV0S2V5XCI6XCJtZHJUK1NubnAyUkVFNTJUMGhHVWlIWE4waEFYeDZKSHBTTnpSSTgxYzI0PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMTIxNDA3Mjc3QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkZENUY1NUE4N0I3MzMzNDFFOTgxNDE2QkY0ODYwNEQ2XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE2OTgwMjh9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMTIxNDA3Mjc3QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjc3ODY0RDEyRjVCQkQzMEE1QTYyQjc0QjlEQ0FEMzI2XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE2OTgwMjh9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMTIxNDA3Mjc3QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjYyRTY1RkZEMjUxOUY5RkY0MEM1NkJDRUU0MEQ5RDU3XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE2OTgwMzF9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzMTIxNDA3Mjc3QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjJGMUVGRDNDQzk4OEQ5Rjc2QTZDMDYzM0QwMTg2Q0RGXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTE2OTgwMzF9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJNWVpnaWdjNlNCT3hPUlptUHAwdG1nXCIsXCJwaG9uZUlkXCI6XCI5MGQ0MTVhMy05ZmViLTRhNzMtYTUwYy1mNTQ1NmFmNTBkNGRcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInhLeDBXNllEbjN0OSsrK0JGWmpNZ3hZaWpYWT1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJsNHM0aFVFVUwvaDBTUVE5eVc5U0lGRWxrN289XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiVFg5OEpBTlJcIixcIm1lXCI6e1wiaWRcIjpcIjkyMzEyMTQwNzI3NzoxQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjIyOTg5MjkzOTYwODEzMzoxQGxpZFwiLFwibmFtZVwiOlwi8J+Sr/Cfkp7wn4aXIEtpbmcg8J+RkVwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTEtVK3FVR0VPVGdtYkFHR0FFZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkgvNTZEN1FSeU5qa1I2dGhqV2RaQ0VIVU94YzF5KzZ3NlZ6b2FyQUlVa0U9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCI2ejVHNjI4c1pZYkIyenZIZWJxQTlSTXp0RE5jVXVFcnVIb2pYK3pFLy9tMmxmOU92UnpDTitrMkp0ZDg0OTJqK0FaOCtwM2RPZUFNUU94VGV5TE1EQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIjJkeHJlMzhPS2pMMHZHazhIcmo2SlhrZlVwNDh4U2I0S04zK21zQmhYcFRCa2cydzNjODE2V0s5VE00V0ZMMXZZWElVVUVXckg5cnNsZ2UwNmxFV2lBPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MjMxMjE0MDcyNzc6MUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJSLytlZyswRWNqWTVFZXJZWTFuV1FoQjFEc1hOY3Z1c09sYzZHcXdDRkpCXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMTY5ODAyNCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFNRlhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNRlguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKT1NKQVVSQ1h2elNIbEY0andvTmlxdXR5VC90UmRDa1ozSEFKZVFmYUhJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2OTAyMDg4MTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMTY5ODAyNjAxNVwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "JAANI",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "JAANI",
  ownername:process.env.OWNER_NAME|| "It'x JAANI",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "c8ec5b7e-bfe0-4639-a5fd-9b82d495e8ae",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "rais junaid",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
