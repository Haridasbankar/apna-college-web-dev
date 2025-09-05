//Qn1
let nums = [1, 2, 3, 4, 5];
const square = nums.map((num) => num * num);
console.log(square);
let sum = square.reduce((acc, cur) => acc + cur, 0);
let avg = sum / nums.length;
console.log(avg);

//Qn2
let numbers = [2, 4, 6, 8, -2, -4];
console.log(numbers.map((number) => number + 5));

//Qn3
let strings = ["adam", "bob", "catlyn", "donald", "eve"];
console.log(strings.map((string) => string.toUpperCase()));
