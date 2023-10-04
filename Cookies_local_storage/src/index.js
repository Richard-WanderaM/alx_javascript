function setCookies() {
    const firstNameInput = document.getElementById('firstname').value;
    const emailInput = document.getElementById('email').value;
  
    document.cookie = `firstname=${firstNameInput}`;
    document.cookie = `email=${emailInput}`;
  }
  
  function showCookies() {
    const cookiesParagraph = document.createElement('p');
    cookiesParagraph.innerHTML = `Cookies: ${document.cookie}`;
  
    document.body.appendChild(cookiesParagraph);
  }
  