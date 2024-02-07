const messages = [
  {
    name: "Obi-Wan Kenobi",
    date: "12:45",
    message: "You were the Chosen One!",
    status: "Delivered",
  },
  {
    name: "Anakin",
    date: "12:46",
    message: "I hate you!",
    status: "Send at 12:46",
  },
];

const messagesDoc = document.querySelector("#messages");
const input = document.getElementById("input");

function createBubble(message) {
  return `
    <div class="chat ${
      message.name === "Obi-Wan Kenobi" ? "chat-start" : "chat-end"
    }">
    <div class="chat-image avatar">
    <div class="w-10 rounded-full">
    <img
    alt="Tailwind CSS chat bubble component"
    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
    />
    </div>
    </div>
    <div class="chat-header">
    ${message.name}
    <time class="text-xs opacity-50">${message.date}</time>
    </div>
    <div class="chat-bubble">${message.message}</div>
    <div class="chat-footer opacity-50">${message.status}</div>
    </div>
    `;
}

messages.forEach((message) => {
  messagesDoc.innerHTML += createBubble(message);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    messagesDoc.innerHTML += createBubble({
      name: "Obi-Wan Kenobi",
      message: input.value,
      date: "15:35",
      status: "Delivered",
    });
    input.value = "";
  }
});

let cle = localStorage.getItem("theme");
console.log(cle);

localStorage.setItem("theme", "light");
cle = localStorage.getItem("theme");
console.log(cle);

if (null) {
  console.log("Vrai");
} else {
  console.log("Faux");
}
