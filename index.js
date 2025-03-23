import express from "express";
import { start } from "./app/bot-whatsapp.js"

const app = express();

app.listen(5000, async () => {
    await start();
    console.log("server running");
})