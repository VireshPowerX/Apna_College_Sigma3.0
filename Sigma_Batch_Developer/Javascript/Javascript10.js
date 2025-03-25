// Event Bubbling and Event Delegation
// Event Bubbling: When an event occurs on an element, it first triggers the event on that element, then it triggers the same event on its parent element, and so on, up to the document object.
document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent clicked!");
});
document.getElementById("child").addEventListener("click", function (event) {
  console.log("Child clicked!");
  // Stop the event bubbling up to the parent element
  event.stopPropagation();
});
// Event Delegation: Instead of attaching event listeners to multiple elements, you attach a single event listener to a parent element and delegate the event handling to the child elements.
document.getElementById("parent").addEventListener("click", function (event) {
  if (event.target && event.target.matches("button")) {
    console.log("Button clicked:", event.target.textContent);
  }
});
// Advance js
// Async functions Call Stack
// LIFO Last In First Out
function hello() {}
// Call stack first demo work last hello work
function demo() {
  hello();
}
demo();
// Breakpoints
// inspect sources .js select number and reload
// syncronize means line wise work document function
// asyncronize means some work after document happens like settimeout
// JS is Single Threaded language
// its means syncronize but how its work asyncronize bcz browser is multi Threaded
// Callback Hell meaans sometime i need database first then after api Call
// but if data not found or long time take then never callback complete
// for solving this promises, asyncronize, await we use
// promises is object in resolve & reject
function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success : data was saved");
    } else {
      reject("error : data couldn't be saved");
    }
  });
}
// promises then() & catch()
savetoDb("AI")
  .then(() => {
    console.log("promise was resolved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
// Promises chaining
savetoDb("AI")
  .then(() => {
    console.log("promise resolved");
    return savetoDb("ML");
  })
  .then(() => {
    console.log("second promise resolved");
    return savetoDb("DL");
  })
  .catch(() => {
    console.log("promise rejected");
  });
// Promise result & error
savetoDb("AI")
  .then((result) => {
    console.log("promise resolved", result);
    return savetoDb("ML");
  })
  .then((result) => {
    console.log("second promise resolved", result);
    throw new Error("Error: Deep Learning failed");
  })
  .catch((error) => {
    console.log("promise rejected", error);
  });