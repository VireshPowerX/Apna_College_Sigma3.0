// DOM Events 
// Html <button onclick = "console.log('button was clicked'); console.log('for creating AI');"> it's like me </button>
// Event for mouse/button
let btns = document.querySelectorAll("button");
for(btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        console.log("you entered a button");
    };
    console.dir(btn);
};
function sayHello () {
    alert("Hello!");
};
// Event Listner
 btns.forEach(btn => {
    btn.addEventListener("dblclick", function () {
        console.log("Button was clicked");
    });
});
// Activity
// Html <h3>Generate Color</h3> <button>Click Me</button> <div>Random Color Created</div>
// Css body{text-align: center;} div{border:1px solid black; height: 100px; width: 500px; margin: auto;}
let btn = document.querySelector("button"); 
btn.addEventListener("click",function () {
    let h3 = document.querySelector("h3"); 
    let randomColor = getrandomColor(); 
    h3.innerText = randomColor; 
    let div = document.querySelector("div"); 
    div.style.backgroundColor = randomColor; 
    console.log("color update");
}); 
function getrandomColor() {
    let red = Math.floor(Math.random()*255); 
    let green = Math.floor(Math.random()*255); 
    let blue = Math.floor(Math.random()*255); 
    let color = `rgb(${red},${green},${blue})`; 
    return color;
};
// this in Event Listner
// Html <h1>Hello</h1> <h3>Are you ok</h3> <h5>Thinking about you</h5>
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let h5 = document.querySelector("h5");
function feelings() {
    this.innerText = "I Love You";
    this.style.color = "deeppink";
    this.style.backgroundColor = "lightpink";
};
h1.addEventListener("click", feelings);
h3.addEventListener("mouseover", feelings);
h5.addEventListener("dblclick", function() {
    h5.innerText = "I'm thinking about you too!";
    h5.style.color = "deeppink";
    h5.style.backgroundColor = "lightpink";
});
// Keyboard Events
 document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        console.log("Arrow right was pressed");
    }
    if (event.key === "ArrowLeft") {
        console.log("Arrow left was pressed");
    }
    if (event.key === "ArrowUp") {
        console.log("Arrow up was pressed");
    }
    if (event.key === "ArrowDown") {
        console.log("Arrow down was pressed");
    } else {
        console.log(event.key, event.code);
    }
});
// Form Events
 let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form from submitting
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
});
// Extracting Form Data
let form2 = document.querySelector("#myForm");
form2.addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(form2);
    for (let [key, value] of formData) {
        console.log(`${key}: ${value}`);
    }
});
let form4 = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.dir(form4);
    let user = this.elements[0];
    let pass = this.elements[1];
    console.log(user.value);
    console.log(pass.value);
    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});
// More Events
// change Event
 let input = document.querySelector("input");
input.addEventListener("change", function(event) {
    event.preventDefault();
    console.log(this.value);
});
// input Event
 input.addEventListener("input", function(event) {
    event.preventDefault();
    console.log(this.value);
});
let inp = document.querySelector("#text");
let p = document.querySelector("p");
inp.addEventListener("input", function () {
    console.log(inp.value);
    p.innerText = "Text Entered: " + inp.value;
});
// Qs1. Try out the following events in Event Listener on your own : - mouseout - keypress - Scroll - load
// Load Event
window.addEventListener("load", function() {
    console.log("Page is fully loaded!");
});
// Mouseout Event
let mouseoutDiv = document.querySelector("#mouseoutDiv");
mouseoutDiv.addEventListener("mouseout", function() {
    console.log("Mouse left the element!");
});
// Keypress Event
let keypressInput = document.querySelector("#keypressInput");
document.addEventListener("keypress", function(event) {
    console.log(`Key pressed: ${event.key}`);
});
// Scroll Event
window.addEventListener("scroll", function() {
    console.log("Scrolled! Current scroll position:", window.scrollY);
});
// Qs2. Create a button on the page using JavaScript. Add an event listener to the button that changes the button’s color to green when it is clicked.
// Create a button element
let button = document.createElement("button");
button.textContent = "Click Me"; // Add text to the button
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
// Add the button to the page
document.body.appendChild(button);
// Add event listener to the button
button.addEventListener("click", function() {
    button.style.backgroundColor = "green"; // Change color to green on click
    console.log("Button color changed to green!");
});
// Qs3. Create an input element on the page with a placeholder ”enter your name” and an H2 heading on the page inside HTML. The purpose of this input element is to enter a user’s name so it should only input letters from a-z, A-Z and space (all other characters should not be detected). Whenever the user inputs their name, their input should be dynamically visible inside the heading.
// Get references to the input and heading elements
const nameInput = document.querySelector("#nameInput");
const nameHeading = document.querySelector("#nameHeading");
// Add an input event listener to the input field
nameInput.addEventListener("input", function(event) {
    // Filter the input to allow only letters and spaces
    const filteredValue = event.target.value.replace(/[^a-zA-Z\s]/g, "");
    event.target.value = filteredValue;
    // Update the heading dynamically
    nameHeading.textContent = filteredValue ? `Hello, ${filteredValue}!` : "Your name will appear here";
});