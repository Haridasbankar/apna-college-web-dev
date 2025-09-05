const mongoose = require("mongoose");
const initData = require("./data.js");
const AllList = require("../models/list.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/todolist";

main().then(result => { console.log("connected to DB"); })
    .catch(err => { console.log(err); });

async function main() {
    await mongoose.connect(MONGO_URL);
}


const initDB = async () => {
    await AllList.deleteMany({});
    await AllList.insertMany(initData.data);
    console.log("data was initialized");

}

initDB();