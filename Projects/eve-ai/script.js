async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  displayMessage(message, "user");

  try {
    const response = await getEveResponse(message);  // Await backend response
    displayMessage(response, "eve");
  } catch (err) {
    displayMessage("Oops, Eve's feeling shy... can't talk right now 💔", "eve");
    console.error("Error talking to backend:", err);
  }

  input.value = "";
}

function displayMessage(message, sender) {
  const chatBox = document.getElementById("chatBox");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(sender === "user" ? "user-message" : "eve-message");
  messageDiv.innerText = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function getEveResponse(userInput) {
  const res = await fetch("http://localhost:5000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: userInput })
  });
  const data = await res.json();
  return data.response;
}

document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
