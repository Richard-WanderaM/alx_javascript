<!DOCTYPE html>
<html>
<head>
  <title>Advanced Shopping Cart</title>
  <style>
    /* Add your CSS styles here */
  </style>
</head>
<body>
  <script>
    const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

    function checkSessionStorageSupport() {
      try {
        const storage = window.sessionStorage;
        storage.setItem('test', 'test');
        storage.removeItem('test');
        return true;
      } catch (error) {
        return false;
      }
    }

    function getCartFromStorage() {
      const cart = JSON.parse(sessionStorage.getItem('cart'));
      return cart || {};
    }

    function addItemToCart(item) {
      const cart = getCartFromStorage();
      cart[item] = (cart[item] || 0) + 1;
      sessionStorage.setItem('cart', JSON.stringify(cart));
      displayCart();
    }

    function removeItemFromCart(item) {
      const cart = getCartFromStorage();
      delete cart[item];
      sessionStorage.setItem('cart', JSON.stringify(cart));
      displayCart();
    }

    function clearCart() {
      sessionStorage.removeItem('cart');
      displayCart();
    }

    function createStore() {
      const h2 = document.createElement('h2');
      h2.textContent = 'Available products:';
      document.body.appendChild(h2);

      const ul = document.createElement('ul');
      document.body.appendChild(ul);

      availableItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', () => addItemToCart(item));
        ul.appendChild(li);
      });
    }

    function displayCart() {
      const cart = getCartFromStorage();

      const h2 = document.createElement('h2');
      h2.textContent = 'Your cart:';
      document.body.appendChild(h2);

      const cartDiv = document.getElementById('cartDiv');
      if (!cartDiv) {
        const div = document.createElement('div');
        div.id = 'cartDiv';
        document.body.appendChild(div);
      } else {
        cartDiv.innerHTML = '';
      }

      const ul = document.createElement('ul');
      cartDiv.appendChild(ul);

      if (Object.keys(cart).length === 0) {
        const emptyCartLi = document.createElement('li');
        emptyCartLi.textContent = 'Your cart is empty';
        ul.appendChild(emptyCartLi);
      } else {
        for (const item in cart) {
          const li = document.createElement('li');
          li.textContent = `${item} x ${cart[item]} `;
          const removeLink = document.createElement('a');
          removeLink.href = '#';
          removeLink.textContent = '(remove)';
          removeLink.addEventListener('click', () => removeItemFromCart(item));
          li.appendChild(removeLink);
          ul.appendChild(li);
        }
      }

      const clearCartLi = document.createElement('li');
      const clearCartLink = document.createElement('a');
      clearCartLink.href = '#';
      clearCartLink.textContent = 'Clear my cart';
      clearCartLink.addEventListener('click', clearCart);
      clearCartLi.appendChild(clearCartLink);
      ul.insertBefore(clearCartLi, ul.firstChild);
    }

    function initializeApp() {
      const supportsSessionStorage = checkSessionStorageSupport();

      if (!supportsSessionStorage) {
        alert('Sorry, your browser does not support session storage. Try again with a better one.');
        return;
      }

      createStore();
      displayCart();
    }

    initializeApp();
  </script>
</body>
</html>

