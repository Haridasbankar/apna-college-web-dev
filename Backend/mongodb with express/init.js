const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main().then((result) => {
    console.log("connection successfull at DB");
}).catch(err => { console.log(err); });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}



let allchat = [{
    from: "neha",
    to: "priya",
    msg: "send me your exam sheet",
    created_at: new Date(),
}, {
    from: " rohit",
    to: "mohit",
    msg: "teach me JS callbacks",
    created_at: new Date(),
}, {
    from: "amit",
    to: "sumit",
    msg: "all the best",
    created_at: new Date(),
}, {
    from: "anita",
    to: "ramesh",
    msg: "bring me some fruits",
    created_at: new Date(),
}, {
    from: "tony",
    to: "peter",
    msg: "i love you 3000",
    created_at: new Date(),
},
];

Chat.insertMany(allchat);

// Chat.deleteMany({}).then((result) => {
//     console.log(result);
// });
// chat1.save().then((result) => { console.log(result); })
//     .catch(err => { console.log(err); })
