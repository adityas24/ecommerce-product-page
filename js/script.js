"use strict";

const minusIcon = document.querySelector(".icon-minus");
const plusIcon = document.querySelector(".icon-plus");
const productCount = document.querySelector(".product-count");
const btn_atc = document.querySelector(".btn-atc");
const basket = document.querySelector(".basket");
const empty_cart = document.querySelector(".empty-cart");
const cart_icon = document.querySelector(".cart-icon");
const cart_icon_box = document.querySelector(".cart-icon-box");
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

btn_atc.addEventListener("click", () => {
  if (empty_cart.style.display == "none") {
    document.querySelector(".cart-item").remove();
    document.querySelector(".btn-checkout-box").remove();
  }
  empty_cart.style.display = "none";

  cart_icon_box.insertAdjacentHTML(
    "beforeend",
    `<span class="item-count-icon">${items}</span>`
  );

  basket.insertAdjacentHTML(
    "beforeend",
    `<div class="cart-item">
              <img src="images/image-product-1.jpg" alt="" />
              <div class="cart-item-description">
                <h3>Fall Limited Edition Sneakers</h3>
                <div class="cart-item-data">
                  <div class="cart-item-price">$125.00</div>
                  <div>x</div>
                  <div class="cart-item-number">${items}</div>
                  <div class="total-cost">$${(items * 125.0).toFixed(2)}</div>
                </div>
              </div>
              <img
                class="icon-delete"
                src="images/icon-delete.svg"
                alt="icon delete"
              />
            </div> 
            <div class="btn-checkout-box">
              <button class="btn-atc btn-checkout">Checkout</button>
            </div> `
  );

  const icon_delete = document.querySelector(".icon-delete");
  icon_delete.addEventListener("click", () => {
    empty_cart.style.display = "block";
    document.querySelector(".cart-item").remove();
    document.querySelector(".btn-checkout-box").remove();
    document.querySelector('.item-count-icon').remove();
  });
});

cart_icon.addEventListener("click", () => {
  basket.classList.toggle("display-none");
});
