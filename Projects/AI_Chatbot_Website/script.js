function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let chatBox = document.getElementById("chatBox");

    if (userInput.trim() === "") return;

    // Show user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Simple AI responses
    let response = getAIResponse(userInput);
    chatBox.innerHTML += `<p><strong>AI:</strong> ${response}</p>`;

    // Clear input
    document.getElementById("userInput").value = "";

    // Auto-scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}
// Basic AI response logic
function getAIResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I help you today?";
    } else if (input.includes("how are you")) {
        return "I'm just a program, but I'm here to help you!";
    } else if (input.includes("time")) {
        return "I'm not connected to a clock yet, but you can check your system time!";
    } else {
        return "Sorry, I'm still learning. Can you ask me something else?";
    }
}