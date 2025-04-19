// 💡 Axios: A JS library for making HTTP requests (like fetch, but better)

// 🐱 1. Get Random Cat Fact
let btn = document.querySelector("#btn1");
btn.addEventListener("click", async () => {
    let fact = await getFacts(); // Call API
    console.log(fact);
    let p = document.querySelector("#catFact");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";
async function getFacts() {
    try {
        let res = await axios.get(url); // GET request
        return res.data.fact; // Extract fact
    } catch (err) {
        console.log("error : ", err);
        return "Failed to fetch fact";
    }
}

// 🐶 2. Get Random Dog Image
let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", async () => {
    let dog = await getDog(); // API call
    let img = document.querySelector("#dogImage");
    img.src = dog.message; // Set image src
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

// 🤣 3. Get Dad Jokes
// Note: API limit is 15-20 calls per minute — don’t spam loops

let url3 = "https://icanhazdadjoke.com/";

// Using headers to get JSON format instead of HTML
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", async () => {
    let joke = await getJoke();
    let p = document.querySelector("#dadJoke1");
    p.innerText = joke.joke;
    console.log(joke);
});

async function getJoke() {
    try {
        let config = { headers: { Accept: "application/json" } };
        let res = await axios.get(url3, config);
        return res.data;
    } catch (err) {
        console.log("error : ", err);
        return "Failed to fetch dad joke";
    }
}

// Second dad joke button (same logic, shorter version)
let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", async () => {
    let p = document.querySelector("#dadJoke2");
    let joke1 = await axios.get(url3, { headers: { Accept: "application/json" } });
    p.innerText = joke1.data.joke;
});

// 🎓 4. Search Indian Colleges by State
let url4 = "http://universities.hipolabs.com/search?country=India";

let btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", async () => {
    let input = document.querySelector("#stateInput").value.trim().toLowerCase();
    let res = await axios.get(url4); // Get full list of universities

    let ul = document.querySelector("#stateCol");
    ul.innerHTML = ""; // Clear old results

    // Filter colleges by state
    let universities = res.data.filter(university =>
        university["state-province"] &&
        university["state-province"].trim().toLowerCase() === input
    );

    if (universities.length > 0) {
        universities.forEach(university => {
            let li = document.createElement("li");
            li.innerText = university.name;
            ul.appendChild(li);
        });
    } else {
        let li = document.createElement("li");
        li.innerText = "No universities found for this state.";
        ul.appendChild(li);
    }
});
