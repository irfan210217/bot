import { Client } from "whatsapp-web.js";
import fs from "fs";
import a from "qrcode-terminal";
import qrcode from "qrcode";
import { messageResponse } from "../src/components/depositBalance.js"

export const start = async (req, res) => {
    try {
        const whatsapp = new Client();
    
        whatsapp.on('qr', (qr) => {
            qrcode.toFile("./app/images/qrcode.png", qr)
            fs.createReadStream('./app/images/qrcode.png').pipe(res)
        })
    
        whatsapp.on('ready', () => {
            res.redirect('/');
            res.send("success");
        })
    
        whatsapp.on('message_create', messageResponse);
    
        whatsapp.initialize();
    } catch (error) {
        console.log(error);
    }
};