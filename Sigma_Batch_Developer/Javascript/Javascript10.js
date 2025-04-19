// 🚀 EVENT BUBBLING & EVENT DELEGATION

// 🧱 Event Bubbling:
// Event goes from child -> parent -> grandparent... up to document.
document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent clicked!");
});

document.getElementById("child").addEventListener("click", function (event) {
  console.log("Child clicked!");
  event.stopPropagation(); // 🛑 Prevents bubbling up to parent
});

// 🧠 Event Delegation:
// Instead of adding listeners to every button, we listen on parent.
document.getElementById("parent").addEventListener("click", function (event) {
  if (event.target && event.target.matches("button")) {
    console.log("Button clicked:", event.target.textContent);
  }
});


// 📚 ADVANCED JS CONCEPTS

// ✅ JavaScript Execution Model: Call Stack (LIFO - Last In First Out)
function hello() {}
function demo() {
  hello(); // Calls hello() → gets added last, pops first (LIFO)
}
demo(); // Execution starts here

// 🧩 Breakpoints: Set in DevTools (Sources tab) to debug step-by-step

// 🔁 Sync vs Async:
// Synchronous: Code runs line by line (default behavior)
// Asynchronous: Code runs in the background (e.g., setTimeout, promises)

// ⚠️ JS is Single Threaded — only one thing runs at a time.
// But browsers are Multi-threaded — they help JS do async tasks.

// 😖 Callback Hell:
// Too many nested callbacks make code hard to read and debug
// Solution ➤ Promises + async/await

// ✅ PROMISES: Represent async operations (resolve = success, reject = failure)

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1; // Random 1-10
    if (internetSpeed > 4) {
      resolve("success : data was saved");
    } else {
      reject("error : data couldn't be saved");
    }
  });
}

// ✅ Using .then() and .catch() for handling Promises
savetoDb("AI")
  .then(() => {
    console.log("promise was resolved"); // On success
  })
  .catch(() => {
    console.log("promise was rejected"); // On failure
  });

// 🔗 PROMISE CHAINING: Sequential execution of dependent tasks
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

// 🎯 Getting Promise Result or Error
savetoDb("AI")
  .then((result) => {
    console.log("promise resolved", result);
    return savetoDb("ML");
  })
  .then((result) => {
    console.log("second promise resolved", result);
    throw new Error("Error: Deep Learning failed"); // Simulate failure
  })
  .catch((error) => {
    console.log("promise rejected", error); // Handles error
  });
