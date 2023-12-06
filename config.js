const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94786494127"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sahankeshara551@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/colombo'
global.sudo = process.env.SUDO || '94786494127' 
global.devs = '94786494127';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE5NZjFkYXIxdXRuQzFqcVVjTzQrbTF6cGliMDZLaWxoRmo3Z2V0ZEZrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVS9ML0NhZ3k5ZmlNOHArbTlJaEl5TllEMU4ybENyczZzS2czNmJzMmdYND0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQWdLNXhxd2pZMnVxNXE4dVpqekgvcURJaXhaSG8xMFcwT29jRHZpalVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1QkliSzBEdzRDc0w3T3RvcHh1WWorbTBWMmNCZjA0dzI2UEZsRHVsV1g4PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZKd0hSRTBNUTdhNkpyalBQbEt0dmVlZkR5VklCaUh5WFJlZWVoNWZibjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink0c2FYRVdvYmQ0cFBXckd0MHp3cE9ZOEhoV2Yrc3M5QWNhZGNzN0o0Z1k9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNd1FoMjZ0TGRLMGNvRTVVaEhLZlBzV202M0VnZGQvajdWNFdhd21uVWtlU0g1UWhBN0RmVzRGclZGeWlUSjhGck5qWHowK3R3dGcvQmhTN05oWUlnQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjUsImFkdlNlY3JldEtleSI6InNmdGFjaDZEYTVUZzFLNm8rajVwTlNic1p0T0VUUkZqU1MzWWJxWjFkTzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJyRHZGNWZLUXVPQVJ4S0w3UHBKZ3ciLCJwaG9uZUlkIjoiYmI1YzFjZmYtOTVjNi00NDAwLTg4MTMtMTYxOGYzNjA0NzA0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpHT1Z6SU9nQWFjc2FUcVlSR1RpcU1aSGZ0OD0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicndsWnhYRWlRQVdzcEFhZlVNUW5qa21VY3IwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0hibmNRREVLNld3cXNHR0E0PSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFTUZocklnczdrbWlUNk5waVJ2YmY0S3g2NlVmZnBNM2tFUGR4emh2aGpJPSIsImFjY291bnRTaWduYXR1cmUiOiIzKzZlOU0rSExwV0JGR00wTGhPNGRvNlVGekRqeXE4N1lITzlUT294YytzZUFVQTNRbkdnUzM2cTlPQlFEVEVvOFM3QkNKTzB4VDRJVE03NFJVUTRBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWngxUmFnZkovZGVZM2JFOG1KSlJteTE1cHlTc0ZKMDh3R0lFdWtMdlQ2bHhnK1ZxK3g5cnlNR0dLZW9kZk5BdHVLZEJ3RGZOYzNoaldtblQxS0V1amc9PSJ9LCJtZSI6eyJpZCI6Ijk0Nzg2NDk0MTI3Ojk3QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg2NDk0MTI3Ojk3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJEQllheUlMTzVKb2sramFZa2IyMytDc2V1bEgzNlRONUJEM2NjNGI0WXkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDE4NzQ0ODF9 ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '༒⃤SAHAN ㋡KESHARA☬࿐',
  packname:  process.env.PACK_NAME || '༒⃤SAHAN ㋡KESHARA☬࿐',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-༒⃤SAHAN ㋡KESHARA☬࿐" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '༒⃤SAHAN ㋡KESHARA☬࿐' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '94' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
