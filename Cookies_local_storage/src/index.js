function showCookies() {
    const cookiesParagraph = document.createElement('p');
    
    // Get the values of the cookies
    const email = getCookie('email');
    const firstname = getCookie('firstname');
  
    // Display the values in the specified format
    cookiesParagraph.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
  
    document.body.appendChild(cookiesParagraph);
  }
  
  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return '';
  }
  
  