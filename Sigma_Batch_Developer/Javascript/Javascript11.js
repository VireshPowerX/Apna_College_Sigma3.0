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
