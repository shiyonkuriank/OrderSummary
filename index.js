// Import stylesheets
import './index.css';

(function (w) {
  let items = [
    ['Apple Watch', 800, 1],
    ['Iphone 14', 1000, 1],
    ['Ipad', 1500, 1],
  ];

  let cartItemSEL = document.querySelector('#cartItems-el');
  let viewEL = document.querySelector('#vieworder-el');
  let cancelEL = document.querySelector('#cancel-el');
  let totalEl = document.querySelector('#total-el');

  function increment(idx) {
    items[idx][2] += 1;
    items[idx][1] += items[idx][1] / (items[idx][2] - 1);
    renderItems();
  }

  function decrement(idx) {
    items[idx][2] -= 1;
    if (items[idx][2] < 0) {
      items.splice(idx, 1);
    } else {
      items[idx][1] -= items[idx][1] / (items[idx][2] + 1);
    }

    renderItems();
  }

  function renderItems() {
    let cartItems = '';
    viewEL.style.display = 'none';

    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      cartItems += `<li>${items[i][0] + ' : $'}${
        items[i][1] + ' : Quantity: '
      }${items[i][2]}
      <button id = "increment-el" onclick = "increment(${i})">+</button>
      <button id = "decrement-el" onclick = "decrement(${i})">-</button>
      </li>`;
      sum += items[i][1];
    }
    cartItemSEL.innerHTML = cartItems;
    totalEl.textContent = 'Total: $ ' + sum;
  }

  cancelEL.addEventListener('click', function () {});

  w.increment = increment;
  w.decrement = decrement;
  w.renderItems = renderItems;
  // w.load = load;
})(window);
