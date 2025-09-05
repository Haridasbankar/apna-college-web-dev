const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const uuid = require("uuid");
const path = require("path");
const { compile } = require('ejs');
const app = express();
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    database: 'delta_app',
    password: 'Pass@123',
});

let createRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(), // before version 9.1.0, use userName()
        faker.internet.email(),
        faker.internet.password(),
    ];
}

// let data = [];
// for (let i = 1; i <= 100; i++) {
//     data.push(createRandomUser());
// }

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let user = [["123", "123_newusers", "abc@gmail.com", "abcs"], ["123b", "123_newuser", "abcb@gmail.com", "abcb"]];


app.listen("3000", () => {
    console.log(`listen post 3000`);
});

app.get("/", (req, res) => {
    let q = "SELECT count(*) FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

//home route
app.get("/user", (req, res) => {

    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;

            res.render("showusers.ejs", { users });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }

});

//update route
app.patch("/user/:id", (req, res) => {

    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password) {
                res.send("WORNG PASSWORD");
            } else {
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});
