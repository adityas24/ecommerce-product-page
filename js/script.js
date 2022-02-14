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
    document.querySelector(".item-count-icon").remove();
  });
});

cart_icon.addEventListener("click", () => {
  basket.classList.toggle("display-none");
});

// ---------- IMAGES IMPLEMENTATION ----------- //


const product__images = document.querySelectorAll(".product__image");
const product__thumbnails_container = document.querySelector(
  ".product-image-thumbnail"
);
const thumbanil__images = document.querySelectorAll(".image__thumbnail");
const thumbnail__boxes = document.querySelectorAll('.thumbnail__box');

product__thumbnails_container.addEventListener("click", function (e) {
  const clicked = e.target.closest(".image__thumbnail");
  if (!clicked) return;
  product__images.forEach((img) =>
    img.classList.remove("product__image--active")
  );

  document
    .querySelector(`.product__image--${e.target.dataset.thumbnail}`)
    .classList.add("product__image--active");

  thumbanil__images.forEach((img) => {
    img.classList.remove("thumbnail-highlight");
    e.target.classList.add("thumbnail-highlight");
  });

  thumbnail__boxes.forEach(box => {
    box.classList.remove("thumbnail__box--border");
    e.target.closest('.thumbnail__box').classList.add("thumbnail__box--border");
  })

});

// ------------------------------------ //
// LIGHTBOX IMPLEMENTATION

const product_images_box = document.querySelector(".product__images");
const lightbox = document.querySelector(".lightbox");
const lightbox__images = document.querySelectorAll(".lightbox__image");
const lightbox__thumbnails__container = document.querySelector(
  ".lightbox__thumbnails"
);
const icon_previous = document.querySelector(".icon-previous");
const icon_next = document.querySelector(".icon-next");
const icon_close = document.querySelector(".icon-close");
icon_previous.style.display = "none";

lightbox__thumbnails__container.addEventListener("click", function (e) {
  if (!e.target.previousElementSibling) {
    icon_previous.style.display = "none";
  } else {
    icon_previous.style.display = "block";
  }
  if (!e.target.nextElementSibling) {
    icon_next.style.display = "none";
  } else {
    icon_next.style.display = "block";
  }
  const clicked = e.target.closest(".lightbox__thumbnail");
  if (!clicked) return;
  lightbox__images.forEach((img) =>
    img.classList.remove("lightbox__image--active")
  );
  document
    .querySelector(`.lightbox__image--${e.target.dataset.thumbnail}`)
    .classList.add("lightbox__image--active");
});

icon_next.addEventListener("click", (e) => {
  let activeImage;

  lightbox__images.forEach((img) => {
    if (img.classList.contains("lightbox__image--active")) {
      activeImage = img;
    }
  });

  if (activeImage.nextElementSibling.classList.contains("lightbox__image")) {
    activeImage.classList.remove("lightbox__image--active");
    activeImage.nextElementSibling.classList.add("lightbox__image--active");
  }
  if (activeImage.nextElementSibling.classList.contains("lightbox__image--4"))
    icon_next.style.display = "none";
  icon_previous.style.display = "block";
});

icon_previous.addEventListener("click", (e) => {
  let activeImage;

  lightbox__images.forEach((img) => {
    if (img.classList.contains("lightbox__image--active")) {
      activeImage = img;
    }
  });

  if (!activeImage.previousElementSibling) return;

  if (
    activeImage.previousElementSibling.classList.contains("lightbox__image")
  ) {
    activeImage.classList.remove("lightbox__image--active");
    activeImage.previousElementSibling.classList.add("lightbox__image--active");
  }

  if (
    activeImage.previousElementSibling.classList.contains("lightbox__image--1")
  ) {
    icon_previous.style.display = "none";
    icon_next.style.display = "block";
  }
});

// Opening
product_images_box.addEventListener("click", () => {
  lightbox.style.display = "flex";
});

// Closing
icon_close.addEventListener("click", () => {
  lightbox.style.display = "none";
  icon_previous.style.display = "none";
  icon_next.style.display = "block";

  lightbox__images.forEach((img) =>
    img.classList.remove("lightbox__image--active")
  );

  lightbox__images[0].classList.add("lightbox__image--active");
});
