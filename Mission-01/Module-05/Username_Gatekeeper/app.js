// Username Gatekeeper
const usernameOutput = document.getElementById("username-output");

const usernameInput = document.getElementById("username-input");

function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  }

  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }

  return "Available";
}

usernameInput.addEventListener("input", () => {
  usernameOutput.textContent = validateUsername(usernameInput.value);
});

