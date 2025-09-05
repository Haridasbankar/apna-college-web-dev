const express = require("express");
const app = express();
const path = require("path");

let port = 3000;
app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, (req, res) => {
    console.log(`start port ${port}`);
});

app.get((req, res) => {
    res.send("this is home");
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceVal });
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs");
    }

});