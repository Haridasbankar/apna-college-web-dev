const mongoose = require("mongoose");
// const { insertMany } = require("../../project/models/listing");

// mongoose.connect("mongodb://127.0.0.1:27017/test");

main().then((result) => {
    console.log("connection successfull");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

// User.findById("68b2a489c501831badf28380").then((res) => {
//     console.log(res);
// }).catch(err => { console.log(err) });

// User.updateOne({ name: "Bruce" }, { age: 20 }).then((res) => {
//     console.log(res);
// }).catch(err => { console.log(err) });

// User.deleteOne({ name: "Bruce" }).then((result) => {
//     console.log(result);
// }).catch(err => { console.log(err); });

// User.deleteMany({ age: 20 }).then((result) => {
//     console.log(result);
// }).catch(err => { console.log(err); });

// User.insertMany([
//     { name: "tony", email: "tony@gmail.com", age: 50 },
//     { name: "peter", email: "peter@gmail.com", age: 30 },
//     { name: "Bruce", email: "bruce@gmail.com", age: 47 },
// ]).then((result) => {
//     console.log(result);
// }).catch(err => { console.log(err); });

// const user1 = new User({
//     name: "Adam",
//     email: "adma@gmail.com",
//     age: 20,
// });

// user1.save().then((result) => {
//     console.log("data was save", result);
// }).catch(err => { console.log(err); });

