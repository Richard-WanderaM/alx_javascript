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

function addItemToCart(item) {
  sessionStorage.setItem(item, 'true');
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
  const cartItemsCount = Object.keys(sessionStorage).length;

  const previousMessage = document.querySelector('#previousMessage');
  if (previousMessage) {
    previousMessage.textContent = `You previously had ${cartItemsCount} item${cartItemsCount > 1 ? 's' : ''} in your cart.`;
  } else if (cartItemsCount > 0) {
    const p = document.createElement('p');
    p.textContent = `You previously had ${cartItemsCount} item${cartItemsCount > 1 ? 's' : ''} in your cart.`;
    p.id = 'previousMessage';
    document.body.appendChild(p);
  }
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
