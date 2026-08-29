import express from "express";
import fs from "fs/promises";


const app = express()

app.use(express.json());
app.use(express.static("."));

app.get('/', (req, res) => {
    res.sendFile('index.html')
});

app.post("/api/info", async (req, res) => {
    const line = JSON.stringify(req.body) + "\n";
    await fs.appendFile("./output.json", line);
    console.log("Saved")
    res.send("Saved!")
});

app.listen(3000, () => {
    console.log("Listening")
});