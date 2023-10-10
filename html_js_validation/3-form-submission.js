function handleFormSubmit(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const errorElement = document.getElementById('error');
  
    if (!name || !email) {
      errorElement.innerText = 'Please fill in all required fields.';
      return;
    }
  
    // Perform any additional validation if needed
  
    errorElement.innerText = 'Form submitted successfully!';
  }
  
  document.getElementById('submitForm').addEventListener('submit', handleFormSubmit);
  