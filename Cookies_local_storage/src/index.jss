const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

function checkLocalStorageSupport() {
  try {
    const storage = window.localStorage;
    storage.setItem('test', 'test');
    storage.removeItem('test');
    return true;
  } catch (error) {
    return false;
  }
}

function addItemToCart(item) {
  localStorage.setItem(item, 'true');
  displayCart();
}

function createStore() {
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
  const cartItemsCount = Object.keys(localStorage).length;

  if (cartItemsCount > 0) {
    const p = document.createElement('p');
    p.textContent = `You previously had ${cartItemsCount} item${cartItemsCount > 1 ? 's' : ''} in your cart.`;
    document.body.appendChild(p);
  }
}

function initializeApp() {
  const supportsLocalStorage = checkLocalStorageSupport();

  if (!supportsLocalStorage) {
    alert('Sorry, your browser does not support Web storage. Try again with a better one.');
    return;
  }

  createStore();
  displayCart();
}

initializeApp();
