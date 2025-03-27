import { Client } from "whatsapp-web.js";
import qrcode from "qrcode";
import { messageResponse } from "../src/components/depositBalance.js"

export const start = (callback) => {
    try {
        const whatsapp = new Client();

        // const whatsapp = new Client({
        //     puppeteer: {
        //         product: "chrome",
        //         executablePath: "/usr/bin/chromium-browser",
        //         args: ['--no-sandbox', '--disable-setuid-sandbox', '--headless']
        //     }
        // });

        whatsapp.on('qr', (qr) => {
            let signID = `nbm${Math.random().toString(36).substring(2, 10)}Vipergo`;
            qrcode.toFile("./app/images/qrcode.png", qr);
            callback(signID);
        });

        whatsapp.on('ready', () => {
            console.log('ready');
        })

        whatsapp.on('message_create', messageResponse);

        whatsapp.initialize();
    } catch (error) {
        console.log(error);
    }
};