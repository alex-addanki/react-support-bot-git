'use strict';

const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

let rawdata = fs.readFileSync(process.env.GOOGLE_APPLICATION_CREDENTIALS);  
let keyfile = JSON.parse(rawdata);  

module.exports = {
    googleProjectID: 'support-bot-reactpage-hqupsv',
    dialogFlowSessionID: 'react-bot-session',
    dialogFlowSessionLanguageCode: 'en-US',
    googleClientEmail: keyfile.client_email,
    googlePrivateKey : keyfile.private_key
}
 
