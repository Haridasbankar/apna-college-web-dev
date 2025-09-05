//Qn1
let string = [1, 2, 4, 3, 7, 5, 0, 7, 8, 3];
let larg = string[0];

let largest = function (string) {

    for (let i = 0; i < string.length; i++) {
        if (larg < string[i]) {
            larg = string[i];
        }
    }
    return larg;
}
console.log(`  largest number in array is : ${largest(string)}`);


//Qn2
// let str  = "abcdabcdFefgggh";
// let str1;
// // console.log(str.length());s
// let ans = function(str) {
//     for(i of str){
//         for(let j=0; j<;j++){
//             if(!(i == j)){
//                 str1 +=i;
//             }
//         }
//     }
// }

// ans(str);


//Qn3
let arr = [];
let country = ["Australia", "Germany", "United State of America"];
let longest = 0;
let idx = 0;
function longcont(country) {

    for (let i = 0; i < country.length; i++) {
        let count = 0;
        for (j of country[i]) {
            count++;

        }
        arr.push(count);
    }

    for (let i = 0; i < arr.length; i++) {
        if (longest < arr[i]) {
            longest = arr[i];
            idx = i;
        }

    }
    console.log(`most charater in country name is ${country[idx]} charater is: ${longest}`);

}
longcont(country);


//Qn5


function rand(str, end) {
    let number = Math.floor(Math.random() * (end - str)) + str + 1;
    console.log(`random number between ${str} to ${end} is ${number}`);
}
rand(20, 25);