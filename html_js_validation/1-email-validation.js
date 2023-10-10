function validateEmail() {
    const email = document.getElementById('email').value;
    const errorElement = document.getElementById('error');
  
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      errorElement.innerText = 'Please enter a valid email address.';
      return false;
    }
  
    errorElement.innerText = '';
    return true;
  }
  
  document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateEmail()) {
      alert('Email format is valid. Form submitted!');
    }
  });
  