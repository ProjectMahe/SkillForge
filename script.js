// Show a message when the button is clicked
function showWelcome() {
  alert("👋 Welcome to Mentorix! Let’s begin your learning journey.");
}

// Optionally insert dynamic content
document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("dynamic-section");
  const infoBox = document.createElement("div");
  infoBox.innerHTML = `
    <h3>📊 Progress Tracker Coming Soon!</h3>
    <p>We're working on auto-grade analysis, performance charts, and more.</p>
  `;
  section.appendChild(infoBox);
});
