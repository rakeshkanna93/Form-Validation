document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();
  
    clearErrors();
  
    let isValid = true;
  
    if (!validateEmail(email)) {
      showError("emailError", "Please enter a valid email address.");
      isValid = false;
    }
  
    if (password.length < 6) {
      showError("passwordError", "Password must be at least 6 characters.");
      isValid = false;
    }
  
    if (!/^\d{10}$/.test(phone)) {
      showError("phoneError", "Phone number must be 10 digits.");
      isValid = false;
    }
  
    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
  
  function clearErrors() {
    document.querySelectorAll(".error-message").forEach(error => {
      error.textContent = "";
    });
  }
  
  function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
  }
  
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
