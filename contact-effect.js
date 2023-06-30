const text = "Please don't hesitate to reach out.";
const typingTextElement = document.getElementById("typing-text");

function typeText() {
  let index = 0;
  const typingInterval = setInterval(() => {
    typingTextElement.textContent += text[index];
    index++;
    if (index >= text.length) {
      clearInterval(typingInterval);
    }
  }, 100);
}

typeText();
