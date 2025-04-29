// 🌐 ASYNC FUNCTIONS - Always return a Promise

async function greet() {
    throw "404 page not found"; // Throws an error, simulates rejection
    return "hello!"; // This never runs
}

greet()
    .then((result) => {
        console.log("promise was resolved");
        console.log("result was : ", result);
    })
    .catch((error) => {
        console.log("promise was rejected, error was : ", error);
    });

// Async arrow function always returns a Promise
let demo = async () => { return 5 }; // Same as: return Promise.resolve(5)

// ✅ AWAIT - Wait for promise resolution (only inside async function)
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve(); // You could pass num here if needed
        }, 1000);
        reject("error"); // ❌ Unreachable (should be inside setTimeout)
    });
}

// Executes getNum() 3 times: two with await (waits), one without (runs async)
async function demo() {
    await getNum();
    await getNum();
    getNum(); // No await = runs independently
}
demo();

// 💥 Handling async errors using try-catch + finally
let h1 = document.createElement("h1");
h1.innerText = "AI";

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed!");
        }, delay);
    });
}

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("blue", 2000);
        await changeColor("green", 3000);
    } catch (error) {
        console.log("error : ", error);
    } finally {
        document.body.appendChild(h1); // Always runs
    }

    let a = 5;
    console.log("new number : ", a + 3); // 8
}

// 📦 JSON = JavaScript Object Notation (used in APIs)

// Convert JSON string to object
let jsonStr = '{"name":"John","age":30}';
let obj = JSON.parse(jsonStr);
console.log(obj); // { name: "John", age: 30 }

// Convert object to JSON string
let person = { name: "John", age: 30 };
let jsonStr1 = JSON.stringify(person);
console.log(jsonStr1); // '{"name":"John","age":30}'

// 📡 API Notes
// - Hoppscotch (hoppscotch.io) & Postman = tools to test APIs
// - AJAX = Asynchronous JavaScript and XML
// - AJAJ = Same, but with JSON instead of XML
// - HTTP Verbs: GET, POST, DELETE
// - Status Codes: 
//   - 200 = OK ✅
//   - 404 = Not Found ❌
//   - 400 = Bad Request 🚫
//   - 500 = Internal Server Error 🧯
// - Query Strings: URL + `?key=value&key2=value2`
// - HTTP Headers: Info in request/response (view in DevTools Network)

// 🧪 FETCH API (returns a Promise)
let url = "https://catfact.ninja/fact";

fetch(url)
    .then((res) => {
        console.log(res); // Response object
        return res.json(); // Convert response body to JSON
    })
    .then((data) => {
        console.log("data1 = ", data.fact); // Log fact
        return fetch(url); // Fetch again
    })
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data2) => {
        console.log("data2 = ", data2.fact);
    })
    .catch((err) => {
        console.log("ERROR - ", err); // Catch network errors
    });

console.log("Hello AI"); // Logs first (fetch is async)

// 🧠 FETCH with async/await (cleaner)
async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log(data1.fact);
    } catch (err) {
        console.log("ERROR - ", err);
    }
    console.log("Hello AI");
}
