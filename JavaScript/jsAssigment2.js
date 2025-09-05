let num = 10;

if (num % 10 == 0) {
    console.log("Good");
} else {
    console.log("Bad");
}


let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");

let ms = (`${name} is ${age} yeras old.`);
alert(ms);

let month = "february";

switch (month) {
    case "january","february","march":
        console.log("Month in Quarter 1.");
        break;
    case "april" || "may" || "june":
        console.log("Month in Quarter 2.");
        break;
    case "july" || "august" || "september":
        console.log("Month in Quarter 3.");
        break;
    default:
        console.log("Month in Quarter 4.");


}

//Qs5
let number1 = 12;
let number2 = 10;
let number3 = 11;

if(number1>number2 && number1 >number3){
    console.log(`number 1 is largest : ${number1}`);
}else if(number2>number1 && number2>number3){
    console.log(`number 2 is largest : ${number2}`);
}else{
    console.log(`number 3 is largest : ${number3}`);
}

//Qs6
let num1 = 324;
let num2 = 41234;


if((num1%10) == (num2%10)){
    console.log("last digit are same!");
} else{
    console.log("last digit are not same.");
}

