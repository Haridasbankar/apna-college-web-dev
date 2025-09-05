// function getNum() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             let rand = Math.floor(Math.random() * 10) + 1;
//             console.log(rand);
//             resolve(rand); // Resolving the promise with the generated number
//         }, 2000);
//     });
// }
// async function name() {
//     await getNum();
//     await getNum();
//     getNum();
// }


h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`color change to ${color}`);
//             resolve();
//         }, delay);
//     });
// }

// async function color() {
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("blue", 1000);
//     changeColor("green", 1000);
// }
// color();



function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        let rand = Math.floor(Math.random() * 10) + 1;
        if (rand > 4) {
            reject("Promise is rejected!");
        }
        setTimeout(() => {
            h1.style.color = color;
            console.log(`change color is : ${color}`);
            resolve("color change!");
        }, delay);
    });
}

async function change() {
    try {
        await colorChange("red", 1000);
        await colorChange("yellow", 1000);
        await colorChange("blue", 1000);
        await colorChange("green", 1000);
        colorChange("orange", 1000);
    }
    catch (error) {
        console.log("error catch");
        console.log(error)
    }
    let a = 10;
    console.log("value of a is: ", a);
}