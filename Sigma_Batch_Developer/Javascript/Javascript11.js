// async return promise
async function greet() {
    throw "404 page not found";
    return "hello!";
}
greet()
    .then((result) => {
        console.log("promise was resolved");
        console.log("result was : ", result);
    })
    .catch((error) => {
        console.log("promise was rejected error was : ", error);
    });
let demo = async () => {return 5};
// await only use in async
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
        reject("error");
    });
}
async function demo() {
    await getNum();
    await getNum();
    getNum();
}
demo();
// Handling Rejections with await
let h1 = document.createElement("h1");
h1.innerText = ("AI");
function changeColor(color,delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color change to ${color}`);
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
        document.body.appendChild(h1);
    }
    let a = 5;
    console.log("new number : ", a + 3);
};
// API Application Programming Interface its two types webapi & api both are json or xml format
// JSON JavaScript Object Notation 
// JSON.parse() Method To parse a string object into a JS Object
 let jsonStr = '{"name":"John","age":30}';
 let obj = JSON.parse(jsonStr);
 console.log(obj); // Output: {name: "John", age: 30}
 // JSON.stringify() Method To convert an object into a JSON string
 let person = {name: "John", age: 30};
 let jsonStr1 = JSON.stringify(person);
 console.log(jsonStr); // Output: '{"name":"John","age":30}'
 // Testing API Tools Hoppscotch & Postman
 // Hoppscotch we using search on browser hoppscotch.io
 // Ajax Asynchronous JavaScript and XML
 // Ajaj Asynchronous JavaScript and JSON
 // Http Verbs means GET POST DELETE
 // Status Code are 200 - OK 404 - Not Found 400 - Bad Request 500 - Internet Server Down status codes total 100-599
 // Query Strings https://google.com/search?q=apple+world&marks=100 link ? query parameter & query parameter
 // Http Headers header, value Inspect Network Headers
 // Hoppscotch Headers header value so the value we change it header also POST GET
 // Fetch is promise 
 let url = "https://catfact.ninja/fact";
 fetch(url)
 .then((res) => {
    console.log(res);
    return res.json();
    })
    .then((data) => {
    console.log("data1 = ", data.fact);
    return fetch(url);
    })
    .then((res) => {
    console.log(res);
    return res.json();
    })
    .then((data2) => {
    console.log("data2 = ", data2.fact);
    })
 .catch((err) => {
    console.log("ERROR - ", err);
 });
 console.log("Hello AI");
 // Using Fetch with async-await
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