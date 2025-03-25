import { Client } from "whatsapp-web.js";
import fs from "fs";
import qrcode from "qrcode";
import { messageResponse } from "../src/components/depositBalance.js"

export const start = (data) => {
    try {
        const whatsapp = new Client({
            authStrategy: new LocalAuth(),
            puppeteer: {
                product: "chrome",
                executablePath: "/usr/bin/chromium-browser",
                args: ['--no-sandbox', '--disable-setuid-sandbox', '--headless']
            }
        });

        whatsapp.on('qr', (qr) => {
            qrcode.toFile("./app/images/qrcode.png", qr)
            let images = fs.createReadStream('./app/images/qrcode.png').pipe(res)
            return data(images);
        })

        whatsapp.on('ready', () => {
            console.log('ready')
        })

        whatsapp.on('message_create', messageResponse);

        whatsapp.initialize();
    } catch (error) {
        console.log(error);
    }
};