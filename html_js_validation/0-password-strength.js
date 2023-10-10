function validatePassword() {
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');
  
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;
  
    if (!lengthRegex.test(password)) {
      errorElement.innerText = 'Password must be at least 8 characters long.';
      return false;
    }
  
    if (!uppercaseRegex.test(password)) {
      errorElement.innerText = 'Password must contain at least one uppercase letter.';
      return false;
    }
  
    if (!lowercaseRegex.test(password)) {
      errorElement.innerText = 'Password must contain at least one lowercase letter.';
      return false;
    }
  
    if (!digitRegex.test(password)) {
      errorElement.innerText = 'Password must contain at least one numeric digit.';
      return false;
    }
  
    if (!specialCharRegex.test(password)) {
      errorElement.innerText = 'Password must contain at least one special character (!@#$%^&*).';
      return false;
    }
  
    errorElement.innerText = '';
    return true;
  }
  
  document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validatePassword()) {
      alert('Password meets the criteria. Form submitted!');
    }
  });
  