let obj = {
    name: "haridas",
    age: 12,
    class: "12th"
}

console.log(obj);
console.log(process.argv);
let argv = process.argv;
for (let i = 2; i < argv.length; i++) {
    console.log("hellot to ", argv[i]);
}

const somevalue = require("./math");
console.log(somevalue.sum(2, 2));
console.log(somevalue.mult(2, 5));
console.log(somevalue.PI);