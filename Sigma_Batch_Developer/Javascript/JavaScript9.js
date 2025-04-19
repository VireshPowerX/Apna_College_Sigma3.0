// 🚀 DOM EVENTS

// ✅ Basic Inline Event Example (HTML Only - not in this JS file):
// <button onclick="console.log('button was clicked'); console.log('for creating AI');"> it's like me </button>

// 🎯 Button Mouse Events
let btns = document.querySelectorAll("button");
for (btn of btns) {
    btn.onclick = sayHello; // When clicked, triggers sayHello function
    btn.onmouseenter = function () {
        console.log("you entered a button");
    };
    console.dir(btn); // Logs the full button object to inspect
}

// Function to run on button click
function sayHello() {
    alert("Hello!");
}

// 🧠 Event Listener Version (better practice than inline or direct binding)
btns.forEach(btn => {
    btn.addEventListener("dblclick", function () {
        console.log("Button was clicked");
    });
});

// 🎨 Color Generator Activity
// HTML Setup:
// <h3>Generate Color</h3>
// <button>Click Me</button>
// <div>Random Color Created</div>

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getrandomColor(); // Generate color
    h3.innerText = randomColor;
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    console.log("color update");
});

function getrandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}

// 💞 'this' Keyword in Event Listeners
// HTML: <h1>Hello</h1> <h3>Are you ok</h3> <h5>Thinking about you</h5>
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let h5 = document.querySelector("h5");

function feelings() {
    this.innerText = "I Love You";
    this.style.color = "deeppink";
    this.style.backgroundColor = "lightpink";
}

h1.addEventListener("click", feelings);
h3.addEventListener("mouseover", feelings);

h5.addEventListener("dblclick", function () {
    h5.innerText = "I'm thinking about you too!";
    h5.style.color = "deeppink";
    h5.style.backgroundColor = "lightpink";
});

// ⌨️ Keyboard Events
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") console.log("Arrow right was pressed");
    if (event.key === "ArrowLeft") console.log("Arrow left was pressed");
    if (event.key === "ArrowUp") console.log("Arrow up was pressed");
    if (event.key === "ArrowDown") console.log("Arrow down was pressed");
    else console.log(event.key, event.code); // Logs other key + code
});

// 📥 Form Events - Prevent Default and Access Values
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop page from refreshing
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
});

// 📤 FormData API
let form2 = document.querySelector("#myForm");
form2.addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData(form2);
    for (let [key, value] of formData) {
        console.log(`${key}: ${value}`);
    }
});

// 🧩 Form Elements Access
let form4 = document.querySelector("form");
form4.addEventListener("submit", function (event) {
    event.preventDefault();
    console.dir(form4);
    let user = this.elements[0];
    let pass = this.elements[1];
    console.log(user.value);
    console.log(pass.value);
    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

// 🔄 Change & Input Events
let input = document.querySelector("input");

input.addEventListener("change", function (event) {
    event.preventDefault();
    console.log(this.value); // Logs on losing focus
});

input.addEventListener("input", function (event) {
    event.preventDefault();
    console.log(this.value); // Logs on every key press
});

// 🎯 Dynamic Input + Display
let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function () {
    console.log(inp.value);
    p.innerText = "Text Entered: " + inp.value;
});

// 📚 Try Out These Events Too:

// ✅ Load Event - runs when page fully loads
window.addEventListener("load", function () {
    console.log("Page is fully loaded!");
});

// ✅ Mouseout Event
let mouseoutDiv = document.querySelector("#mouseoutDiv");
mouseoutDiv.addEventListener("mouseout", function () {
    console.log("Mouse left the element!");
});

// ✅ Keypress Event (legacy, use keydown for reliability)
let keypressInput = document.querySelector("#keypressInput");
document.addEventListener("keypress", function (event) {
    console.log(`Key pressed: ${event.key}`);
});

// ✅ Scroll Event
window.addEventListener("scroll", function () {
    console.log("Scrolled! Current scroll position:", window.scrollY);
});

// 🛠️ Create Button & Color Toggle Activity
let button = document.createElement("button");
button.textContent = "Click Me";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
document.body.appendChild(button);

button.addEventListener("click", function () {
    button.style.backgroundColor = "green";
    console.log("Button color changed to green!");
});

// 🎯 Filter Letters Input Activity
// HTML: <input id="nameInput" placeholder="enter your name" />
//        <h2 id="nameHeading">Your name will appear here</h2>

const nameInput = document.querySelector("#nameInput");
const nameHeading = document.querySelector("#nameHeading");

nameInput.addEventListener("input", function (event) {
    const filteredValue = event.target.value.replace(/[^a-zA-Z\s]/g, ""); // Only letters & spaces
    event.target.value = filteredValue;
    nameHeading.textContent = filteredValue ? `Hello, ${filteredValue}!` : "Your name will appear here";
});
