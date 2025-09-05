let avg = (a, b, c) => {
  return (a + b + c) / 3;
};
console.log(avg(2, 3, 4));

let isSum = (a) => a % 2 == 0;
console.log(isSum(11));

//Qn1
const arrayAverage = (arr) => {
  let total = 0;
  for (let number of arr) {
    total += number;
  }
  return total / arr.length;
};
let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));
