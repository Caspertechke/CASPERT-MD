const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID || "CASPER-TECH~eygmlYib#LyuilUaKysu1PXgKgNtoAMgQ0-N9Hq_B0aAB16a7Wok",
    ALIVE_IMG: process.env.ALIVE_IMG || " ",
    ALIVE_MSG: process.env.ALIVE_MSG || "CASPER-XMD is alive 😜 dude 😎"
};
