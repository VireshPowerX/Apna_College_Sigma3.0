// Axios is the library to create HTTP Requests its internaly use fetch
// fetch we want to use parse and stringify
// Axios is auto create JSON data
let btn = document.querySelector("#btn1");
btn.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#catFact");
    p.innerText = fact;
});
let url = "https://catfact.ninja/fact";
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err) {
        console.log("error : ", err);
        return "Failed to fetch fact";
    }
}
let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", async () => {
    let dog = await getDog();
    let img = document.querySelector("#dogImage");
    img.src = dog.message;
});
async function getDog() {
    try {
        let res = await axios.get(url2);
        return res.data;
    } catch (err) {
        console.log("error : ", err);
        return "Failed to fetch dog image";
    }
}
// its free api limits per min 15-20 calls
// dont use loops if calls lots then its block account or maybe its not working error
// Axios Headers are like which format you need html json
// like this link in their website headers key is Accept and value is application/json
let url3 = "https://icanhazdadjoke.com/";
 let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", async () => {
    let joke = await getJoke();
    let p = document.querySelector("#dadJoke1");
    p.innerText = joke.joke;
    console.log(joke);
    // or
    // let joke = await axios.get(url3, { headers: { Accept: "application/json" } });
    // console.log(joke.data.joke);
});
async function getJoke() {
    try {
        let config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url3, config);
        return res.data;
    } catch (err) {
        console.log("error : ", err);
        return "Failed to fetch dad joke";
    }
}
let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", async () => {
    let p = document.querySelector("#dadJoke2");
    let joke1 = await axios.get(url3, { headers: { Accept: "application/json" } });
    p.innerText = joke1.data.joke;
});
// Axios Query Strings
let url4 = "http://universities.hipolabs.com/search?name=";
let btn5 = document.querySelector("#btn5");
 btn5.addEventListener("click", async () => {
    let input = document.querySelector("#stateInput").value;
    let res = await axios.get(`${url4}${input}`);
    console.log(res.data);
    let ul = document.querySelector("#stateCol");
    ul.innerHTML = "";
    res.data.forEach(input => {
        let li = document.createElement("li");
        li.innerText = input.name;
        ul.appendChild(li);
    });
});