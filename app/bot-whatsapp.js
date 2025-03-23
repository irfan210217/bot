import { Client } from "whatsapp-web.js";
import fs from "fs";
// import qrcode from "qrcode-terminal";
import qrcode from "qrcode";
import { messageResponse } from "../src/components/depositBalance.js"

export const start = (data) => {
    try {
        const whatsapp = new Client();
    
        whatsapp.on('qr', (qr) => {
            let images = qrcode.toFile("./app/images/qrcode.png", qr)
            // fs.createReadStream('./app/images/qrcode.png').pipe(res)
            return data(images);
        })
        // whatsapp.on('qr', (qr) => {
        //     qrcode.generate(qr, { small: true });
        // }

        whatsapp.on('ready', () => {
            console.log('ready')
        })
    
        whatsapp.on('message_create', messageResponse);
    
        whatsapp.initialize();
    } catch (error) {
        console.log(error);
    }
};