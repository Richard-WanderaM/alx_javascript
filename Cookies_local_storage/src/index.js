function showForm() {
    document.getElementById('welcomeMessage').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  }
  
  function hideForm() {
    document.getElementById('loginForm').style.display = 'none';
  }
  
  function deleteCookiesAndShowForm() {
    Cookies.remove('firstname');
    Cookies.remove('email');
    showForm();
  }
  
  function showWelcomeMessageOrForm() {
    const firstname = Cookies.get('firstname');
    const welcomeMessage = document.getElementById('welcomeText');
  
    if (firstname) {
      welcomeMessage.innerHTML = `Welcome ${firstname} (<a href="#" onclick="deleteCookiesAndShowForm()">logout</a>)`;
      welcomeMessage.style.fontStyle = 'italic';
      welcomeMessage.style.marginRight = '10px';
      document.body.innerHTML = '';
      document.body.appendChild(welcomeMessage);
    } else {
      showForm();
    }
  }
  
  function setCookiesAndShowWelcomeMessage() {
    const firstNameInput = document.getElementById('firstname').value;
    const emailInput = document.getElementById('email').value;
  
    Cookies.set('firstname', firstNameInput);
    Cookies.set('email', emailInput);
  
    showWelcomeMessageOrForm();
  }
  
  showWelcomeMessageOrForm();
  
  