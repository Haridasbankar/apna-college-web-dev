const express = require('express');
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// app.use((req, res) => {
//     console.log("request received");
//     let code = "<h1>furite</h1><ul><li>apple</li><li>mango</li></ul>";
//     res.send(code);
// });
app.get('/', (req, res) => {
    res.send("you contacted root path");
});

app.get('/apple', (req, res) => {
    res.send("you contacted apple path");
});

app.get('/orange', (req, res) => {
    res.send("you contacted orange path");
});



app.post("/", (req, res) => {
    res.send("you  method on root path");
});

// app.get("/:username", (req, res) => {
//     let { username } = req.params;
//     let htmlstr = `<h1>welcome to the  page of @${username}!</h1>`;
//     res.send(htmlstr);
// });

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("success");
});