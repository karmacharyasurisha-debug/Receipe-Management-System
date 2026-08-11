const registerForm = document.getElementById("register");
const nameError = document.getElementById("nameError");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let valid = true;

  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  if (username === "") {
    usernameError.textContent = "Username is required";
    valid = false;
  } else {
    usernameError.textContent = "";
  }

  if (password === "") {
    passwordError.textContent = "Password is required";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match";
    valid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  if (!valid) return;

  // TODO: Replace this with a real API call to your backend, e.g:
  // fetch("http://localhost:3000/api/register", { method: "POST", ... })

  alert("Account created! (This will connect to the backend next.)");
  window.location.href = "login.html";
});