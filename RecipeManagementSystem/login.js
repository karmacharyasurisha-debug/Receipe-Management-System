const loginForm = document.getElementById("login");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let valid = true;

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

  if (!valid) return;

  // TODO: Replace this with a real API call to your backend, e.g:
  // fetch("http://localhost:3000/api/login", { method: "POST", ... })

  alert("Login successful! (This will connect to the backend next.)");
  window.location.href = "index.html";
});