let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact = await getFact();
    let p = document.querySelector("#result");
    p.innerText = fact;
})


let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err) {
        return "error of code";
    }
}

let url2 = "https://dog.ceo/api/breeds/image/random";

let btn2 = document.querySelector("#post");
btn2.addEventListener("click", async () => {
    let link = await getImg();
    let img = document.querySelector("#img");
    img.setAttribute("src", link);

})

async function getImg() {
    try {
        let res = await axios.get(url2);
        // console.log(res.data.message);
        return res.data.message;
    } catch (err) {
        return "image not found";
    }
}





let url3 = "http://universities.hipolabs.com/search?name=";
let btn3 = document.querySelector("#search");

btn3.addEventListener("click", async () => {
    let input = document.querySelector("#country-input").value;

    let errname = await getCountry(input);
    console.log(errname);

    // print(errname); // ✅ Now it's being called
});

function print(errname) {
    let list = document.querySelector("#list");
    list.innerHTML = "";

    for (let col of errname) {
        console.log(col.name); // ✅ Correct variable

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCountry(input) {
    try {
        let res = await axios.get(url3 + input);
        return res.data;
    } catch (err) {
        console.error("Error fetching data:", err);
        return [];
    }
}
