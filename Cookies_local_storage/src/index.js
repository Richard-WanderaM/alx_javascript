function showForm() {
    document.getElementById('welcomeMessage').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  }
  
  function hideForm() {
    document.getElementById('loginForm').style.display = 'none';
  }
  
  function deleteCookiesAndShowForm() {
    document.cookie = 'firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    showForm();
  }
  
  function showWelcomeMessageOrForm() {
    const firstname = getCookie('firstname');
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
  
  showWelcomeMessageOrForm();
  
  