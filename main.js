let cartStatus = 0;

const getResults = document.querySelector('#results');
const getResultsInfo = document.querySelector('#results-info');
const getCartQuantity = document.querySelector('#cart-quantity');
const getAddToCart = document.querySelector('#add-to-cart');
const getPlusTwo = document.querySelector('#plus-two');
const getPlusThree = document.querySelector('#plus-three');
const getResetCart = document.querySelector('#reset-cart');

getCartQuantity.addEventListener('click', () => {
  cartStatus = cartStatus;
  getResults.innerHTML = cartStatus;
  getResultsInfo.innerHTML = `Cart quantity : ${cartStatus}`;
});

getAddToCart.addEventListener('click', () => {
  cartStatus++;
  getResults.innerHTML = cartStatus;
  getResultsInfo.innerHTML = `Cart quantity : ${cartStatus}`;
});

getPlusTwo.addEventListener('click', () => {
  cartStatus += 2;
  getResults.innerHTML = cartStatus;
  getResultsInfo.innerHTML = `Cart quantity : ${cartStatus}`;
});

getPlusThree.addEventListener('click', () => {
  cartStatus += 3;
  getResults.innerHTML = cartStatus;
  getResultsInfo.innerHTML = `Cart quantity : ${cartStatus}`;
});

getResetCart.addEventListener('click', () => {
  if (cartStatus > 0) {
    cartStatus = 0;
    getResults.innerHTML = cartStatus;
    getResultsInfo.innerHTML = `Cart was reset!... Cart quantity : ${cartStatus}`;
  } else {
    getResultsInfo.innerHTML = `Cart is empty (${cartStatus}), nothing to reset`;
  }
});