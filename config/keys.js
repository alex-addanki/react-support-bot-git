/*
'use strict';
module.exports = {
    googleProjectID: 'support-bot-reactpage-hqupsv',
    dialogFlowSessionID: 'react-bot-session',
    dialogFlowSessionLanguageCode: 'en-US'
    //googleClientEmail: "dialogflowclientreactpage@support-bot-reactpage-hqupsv.iam.gserviceaccount.com",
    //googlePrivateKey : "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQCwk1wRvyJ81yq5\n3DTx5NnhNrhCX+M1oNtsgqQdFg+XlvNtkVeSF8cc0tGOPP6ISVasEWUmUxrVylX3\nZRMXZqDQEvl6S53n0MgZ2ccH/9h+unlorASQ1P7CwenOY822oEavqyNWFy1AMsPM\n3yvuhJnzHI6LsiLGo2QMWXzvI0hoRY3N0/ZxSXHy8Vx/ttMoK+FK7bSGXUXupuhh\nkDO0iXeHKwwC+fctpEgH9SW298OgH+oT+XGmLf7ysPjC93t8sbCPMkCbjXoWLDyV\nTdG3rrFDI5KlH9kgthmL/v4Nka3hOFGHuC2rhmSNaakTf+N98KJlCZJMnCbhyGog\nmmd1RkfbAgMBAAECgf9E+Ur9o6vVGDeYYmxMERkK4FUZmFsol60etellczij/lMY\nea27Y45js/YnmavTkNJKZIEed1gEKwVpnhHXEj+/B6psGx2Tb/q6HlegyE/JMQ47\n1PXznT/m09iAxnuU2wbBmBg1iNgkO7BAVuzSPvnj/UOxTeRHs4thR5OF1kJyeBLR\noh0OdqESrkyO0515o9RahhDrQXDS+L4uuxNtF58ejNjDAdxPdxwh52KfljMlYOYy\ndXqz0PwL3yWTY+W1zdlVLgBUv6ePV0NCkhZTXgQkOMZGh+6+1kuLQp3nnYPm4NaA\n4tS8objHJrRLvj37DjjIU6deO06jBFj/n1It08ECgYEA1a0jquxeIVqDMfju3Cfx\nxSGSP0U1P5UrEZkNWJD4qAZO1KoXUv2uBAL1XpfoMdqa7pBhoJF7H2U+AJD99awo\n1PlhayBOc5sjwgz+CS2AMArFBaqJUnKNZ1DWiyAVH63b35EPFE+gbkqhJT7gE2z3\nkGGGNk7zk3jaZLI1g+paPnMCgYEA04z1lo2urfE8kuAPM6sYDNFpvlx+JN2MTrVg\n6hjlKx8j+6st2SJT6OOvF7ENdku4ERSYpSXconbG9H1mZEcPGzwkdXQ00n2a2kYt\nnUkEq3AUhpX3Rfj9EokYrWKnABOiOzntXOJkybEwPZDrPEsXRaDUKZJuhvJXBWQ7\nHF8FzvkCgYBbwdkSOiSF8Cdsmzh/hAu3mp4B24dtQXJYQUBQ6xhMl0Dc5BnWAqfq\ngxa5Q0RrvDNSBOBXooGbzs8cUScti3uRUXH7HclyrYlieE/Swx5MAyPuNfh4VkbQ\nug8XeXR4wSEtVU6Da1o6YoPmyaRR0zZQYwDOa4L/riMioMCIYGfWbwKBgDupjn22\nWaRe27mEjWUCBNdgnBT+2uikvvRXvQxolwExWCGbJmQNhWKyC+h/m49YTYIrr90r\nr2z2WKgNUbpIPB9vN80UR+1xVSHoFuc796AuDOvkEYffb+gxWA9WOkkQQHm5nZLL\nmqczXKqQW3d2qgqOECflT1yprhcsLGuU9PtpAoGBAMPOi5wzemjaSqoTvGCawBvk\nWBkV0T3B0pnMaX7LvIQs0brWEGY/pYJZYTeIcx+aRY5yb/jYy4S+PJHUhEoC8jci\nOvDCtqC8+1Q9wzz/OuOTo6On68HYz0Th8LvYTt+9JkB9s/6lg0lqNRwGGV0Gdt2p\nK1mTTbZaXUoiVIsJVI8q\n-----END PRIVATE KEY-----\n"
} 
*/
'use strict';

const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

let rawdata = fs.readFileSync(process.env.GOOGLE_APPLICATION_CREDENTIALS);  
let keyfile = JSON.parse(rawdata);  

module.exports = {
    googleProjectID: 'ddpbot',
    dialogFlowSessionID: 'ddpbot-session',
    dialogFlowSessionLanguageCode: 'en-US',
    googleClientEmail: keyfile.client_email,
    googlePrivateKey : keyfile.private_key
}
 
