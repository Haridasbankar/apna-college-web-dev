//Qn1
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);



//Qn2
let number = 2871529;
let count = 0;
let copy = number;

while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);

}
console.log(`number of count: ${count}`);


//Qn3
let sum = 0;

while (copy > 0) {
    digit = copy % 10;
    sum = sum + digit;
    copy = Math.floor(copy / 10);
}

console.log(`number of sum: ${sum}`)



// Qn4
// let n = prompt("Enter your number to find factorial: ");
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//     factorial = factorial * i;
// }
// console.log(`factorial of ${n} is ${factorial}`);


//Qn5
let larnum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > larnum) {
        larnum = arr[i];
    }
}
console.log(`largest number of array is ${larnum}`);