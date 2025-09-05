var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});

let somevalue = require("./math");
console.log(somevalue.sum(2, 2));               