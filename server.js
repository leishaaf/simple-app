import express from "express";
import Info from "./db.js"

const app = express()

app.use(express.json());
app.use(express.static("."));

app.get('/', (req, res) => {
    res.sendFile('index.html')
});

app.post("/api/info", async (req, res) => {
    const newInfo = new Info({name: req.body.name, email: req.body.email, level: req.body.level, expectations: req.body.expectations});
    await newInfo.save();
    console.log("Saved")
    res.send("Saved!")
});

app.listen(3000, () => {
    console.log("Listening")
});