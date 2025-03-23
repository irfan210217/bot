import express from "express";
import { start } from "./app/bot-whatsapp.js"

const app = express();

app.get('/api/wa', (req, res) => {
    start((data) => {
        res.send({
            msg : true
        });
    })
})

app.listen(5000, () => {
    console.log("Server running");
})