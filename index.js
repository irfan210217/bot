import express from "express";
import axios from "axios";
import { start } from "./app/bot-whatsapp.js"

const app = express();

app.get('/api/wa', (req, res) => {
    start((data) => {
        res.send(data);
    })
})

app.get('/', async (req, res) => {
    await axios.get('bot-whatapp-tawny.vercel.app/api/wa');
    res.send({
        msg : "success"
    })
})

app.listen(5000, () => {
    console.log("server running");
})