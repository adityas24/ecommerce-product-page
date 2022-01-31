"use strict";

const minusIcon = document.querySelector(".icon-minus");
const plusIcon = document.querySelector(".icon-plus");
const productCount = document.querySelector(".product-count");
let items = 0;

minusIcon.addEventListener("click", () => {
  if (items >= 1) {
    items--;
    productCount.textContent = items;
  }
});

plusIcon.addEventListener("click", () => {
  items++;
  productCount.textContent = items;
});


