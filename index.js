import express from "express";
import router from "./app/routes.js";
import fs from "fs";

const app = express();


app.use(express.json());
app.use(router);


app.get('/status', (req, res) => {
    let { signID } = req.query;
    
    if (!signID || signID.length < 18) return res.status(400).send({
        code: false,
        msg: "Sign ID Missing"
    })

    fs.createReadStream('./app/images/qrcode.png').pipe(res);
});

app.listen(5000, () => {
    console.log("Server Running");
})