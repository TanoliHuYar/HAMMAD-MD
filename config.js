const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    ALIVE_IMAGE process.env.ALIVE_IMAGE {} "https://i.ibb.co/rZzt9W4/Manul-Ofc-X.jpg"

};
