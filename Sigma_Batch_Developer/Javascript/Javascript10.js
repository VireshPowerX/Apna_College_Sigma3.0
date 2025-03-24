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