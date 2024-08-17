function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPassword(password) {
  return password.length >= 8;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const emailInput = event.target.querySelector('input[name="email"]');
  const passwordInput = event.target.querySelector('input[name="password"]');

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return;
  }
  if (!isValidPassword(password)) {
    alert("Password must be at least 8 characters long.");
    passwordInput.focus();
    return;
  }
  alert("Form submitted successfully!");
}

document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".form");
  forms.forEach((form) => {
    form.addEventlistener("submit", handleFormSubmit);
  });
});
