// 🔧 Core Concepts: Variables, Data Types, If-Else, Loops, Objects, Functions
// ➕ Now merging JavaScript with HTML & CSS via DOM

// 🌲 DOM (Document Object Model) is a logical tree of all HTML elements.
//     Every element in HTML is converted into a JavaScript object.

console.dir(document.all); // Logs all elements of the document (as an array-like object)

// 📌 Accessing Elements:

document.getElementById("input"); // Get element by its ID
document.getElementsByClassName("image"); // Returns an HTMLCollection (like array, but no array methods)
document.getElementsByTagName("p"); // Gets all <p> tags
document.querySelector('div p'); // Gets first <p> inside any <div>
document.querySelector('#myId'); // Gets element by ID
document.querySelector('.myClass'); // Gets element by class
document.querySelectorAll("p"); // Gets all <p> tags as a NodeList (can loop with forEach)

// 📝 Content-related Properties:

p.innerText;     // Only visible text (ignores hidden content)
p.innerHTML;     // Raw HTML inside the element (tags included)
p.textContent;   // Full text content (includes hidden/extra spacing)

// 📎 Attribute Methods:

document.getAttribute('id'); // Get attribute value
document.setAttribute('id','myid'); // Set ID attribute
document.setAttribute('src',"imagepath"); // Set src attribute (for images)

// 🎨 Styling with JavaScript:

let heading = document.querySelector('h1');
heading.style.color = 'red'; // Change text color to red

let links = document.querySelectorAll(".box a"); // Select all <a> inside .box

// Method 1: For-of loop to apply style
for(link of links) {
    link.style.color = "purple";
};

// Method 2: Classic for loop
for(let i = 0; i < links.length; i++) {
    links[i].style.color = "pink";
};

// 🔘 Class List Manipulation:

let img = document.querySelector('#id'); // Use '#' to select by ID (this was missing)
img.classList; // Returns list of all classes on the element

img.classList.add('myclass');      // Adds a class
img.classList.remove('myclass');   // Removes a class
img.classList.contains('myclass'); // Checks if class exists (returns true/false)
img.classList.toggle('myclass');   // Adds class if not present, removes if present

// 🔁 Navigating the DOM Tree:

img.parentElement;                 // Returns parent element
img.children;                      // All child elements
img.childElementCount;             // Number of child elements
img.children[1].previousElementSibling; // Gets the previous sibling element
img.nextElementSibling;           // Gets the next sibling element

// 🧱 Creating and Inserting Elements:

let btn = document.createElement('button'); // Create a new <button>
btn.innerHTML = "New Button !!!"; // Add text inside button

let p = document.querySelector('p'); // Select a <p> element

// Insert relative to <p> element:
p.insertAdjacentElement('beforebegin', btn);  // Before <p>
p.insertAdjacentElement('afterbegin', btn);   // Inside <p>, at the beginning
p.insertAdjacentElement('beforeend', btn);    // Inside <p>, at the end
p.insertAdjacentElement('afterend', btn);     // After <p>

// ❌ Removing Elements:

let body = document.querySelector('body'); // Select <body> tag
body.removeChild(btn); // Removes button from body (if it exists inside)

p.insertAdjacentElement("afterend", btn); // Re-inserts button after <p>
btn.remove(); // Removes button completely from DOM
p.remove(); // Removes the <p> element
body.remove(); // ⚠️ Removes entire body — page becomes blank (dangerous!)
