const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: String,

});
const todolist = mongoose.model("todolist ", listingSchema);
module.exports = todolist;