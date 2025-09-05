const mongoose = require("mongoose");


main().then((result) => {
    console.log("connection successfull");
}).catch(err => { console.log(err); });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is to low for amazon error"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    categary: {
        type: String,
        enum: ["fiction", "non-fiction"],
    }
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "gone Girl ",
    author: "RD shrama",
    price: -10,
    categary: "fiction",
});
book1.save().then(res => { console.log(res); })
    .catch(err => { console.log(err); });