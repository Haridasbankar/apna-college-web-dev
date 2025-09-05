const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://img.freepik.com/premium-photo/random-image_590832-9826.jpg",
        set: (v) => v === "" ? "https://img.freepik.com/premium-photo/random-image_590832-9826.jpg" : v,
    },
    price: Number,
    location: String,
    country: String,



});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;