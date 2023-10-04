function setCookies() {
    const firstNameInput = document.getElementById('firstname').value;
    const emailInput = document.getElementById('email').value;
  
    // Get the current date and time
    const now = new Date();
  
    // Calculate the expiration date (10 days from now)
    const expirationDate = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000);
  
    // Format the expiration date as a string in UTC format
    const expirationDateString = expirationDate.toUTCString();
  
    // Set the cookies with the expiration date and specific path
    document.cookie = `firstname=${firstNameInput}; expires=${expirationDateString}; path=/`;
    document.cookie = `email=${emailInput}; expires=${expirationDateString}; path=/`;
  }
  
  