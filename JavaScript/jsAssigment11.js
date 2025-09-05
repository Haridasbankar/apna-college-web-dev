
h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            if (nextColorChange) nextColorChange();
        }, delay);
    });
}


changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("blue", 1000);
            });
        });
    });
});


// function savetodb(data, success, failure) {
//     // console.log("hello world!");
//     let rand = Math.floor(Math.random() * 10) + 1;

//     if (rand > 4) {
//         success();
//     } else {
//         failure();
//     }

// }

// savetodb("hello world!", () => {
//     console.log("success: data 1 are save!");

//     savetodb("hello world", () => {
//         console.log("success2: data 2 are save");

//         savetodb("hello world!", () => {
//             console.log("success3: data 3 are save");
//         }, () => {
//             console.log("failure3: weak connection");
//         });

//     }, () => {
//         console.log("failure2: weak connection");
//     });

// }, () => {
//     console.log("failure: weak connection")
// });

//promise funtion
function savetodb(data) {

    return new Promise((success, failure) => {
        let rand = Math.floor(Math.random() * 10) + 1;
        if (rand > 4) {
            success("success: Data are save");
        } else {
            failure("Failure: weak connecton");
        }
    });

}


// let request = savetodb("data");
// request
//     .then(() => {
//         console.log("promise was resolve");
//         console.log(request);
//     })
//     .catch(() => {
//         console.log("promise are rejected!");
//         console.log(request);
//     });



//promise chaining
savetodb("data").then(() => {
    console.log("promise was resolve");

    savetodb("data").then(() => {
        console.log("promise was resolve");
    });
})

    .catch(() => {
        console.log("promise are rejected!");
    });



