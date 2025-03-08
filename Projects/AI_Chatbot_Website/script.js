function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let chatBox = document.getElementById("chatBox");

    if (userInput.trim() === "") return;

    // Show user message
    chatBox.innerHTML += `<p class='user-message'><strong>You:</strong> ${userInput}</p>`;

    // AI typing effect
    let aiResponse = document.createElement("p");
    aiResponse.classList.add("ai-message");
    aiResponse.innerHTML = "<strong>AI:</strong> Typing...";
    chatBox.appendChild(aiResponse);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        aiResponse.innerHTML = `<strong>AI:</strong> ${getAIResponse(userInput)}`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    // Clear input
    document.getElementById("userInput").value = "";
}

// Smarter AI Response Logic
function getAIResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I help you today? 😊";
    } else if (input.includes("how are you")) {
        return "I'm just a virtual assistant, but I'm here to help! 💡";
    } else if (input.includes("time")) {
        let now = new Date().toLocaleTimeString();
        return `The current time is ${now} ⏰`;
    } else if (input.includes("name")) {
        return "I'm your AI assistant, nice to meet you! 🤖";
    } else if (input.includes("bye")) {
        return "Goodbye! Have a great day! 👋";
    } else {
        return "I'm still learning! Can you ask me something else? 🤔";
    }
}
