const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,|| "CASPER-TECH~Gn4kjKqT#sB7xX3WA78prkJ7HIBbufglTqyttIv9xvtEZ1TccFn8"
    
    ALIVE_IMG: process.env.ALIVE_IMG,|| " "
    ALIVE_MSG: process.env.ALIVE_MSG,|| "🄲🄰🅂🄿🄴🅁-🅇🄼🄳 is alive😜 dude 😎 "
};
