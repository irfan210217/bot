import express from "express";
import fs from "fs";
import { start } from "./bot-whatsapp.js"


const router = express.Router();

const deposit = (callback) => {
    start((signID, error) => {
        let data = fs.createReadStream('./app/images/qrcode.png');
        callback(data, signID, error);
    })
};

const result = (req, res) => {
    deposit((data, signID, error) => {
        if (data) return res.redirect(`/status?signID=${signID}`);
        return res.send(error);
    });
};

router.get('/run', result);

export default router;