import express from "express";
import fs from "fs";
import { start } from "./bot-whatsapp.js"


const router = express.Router();

const deposit = (callback) => {
    start((signID) => {
        let data = fs.createReadStream('./app/images/qrcode.png');
        callback(data, signID);
    })
};

const result = (req, res) => {
    deposit((data, signID) => {
        if (data) return res.redirect(`/status?signID=${signID}`);
        return res.send({
            status : false
        });
    });
};

router.get('/run', result);

export default router;