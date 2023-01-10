import Cartline from "./Cartline";
import Cart from "./Cart";
import Catalog from "./Catalog";
import Item from "./Item";
import data from "../data.json";


function handleCartClick() {
  document.querySelector(".cart-wrapper").classList.toggle("active");
  document.querySelector(".catalog").classList.toggle("active");
}

document.querySelector(".open-close-cart").addEventListener("click", () => {
  handleCartClick()
});

document.querySelector("main").style.height =
  window.innerHeight - document.querySelector("header").offsetHeight + "px";

const catalog = new Catalog();
data.items.map((item, i) => {
  const ITEM = new Item(item.img, item.title, item.desc, item.price, i);
  catalog.addItem(ITEM);
});

let maxHeightImg = 0;
document
  .querySelectorAll(".catalog .item .item__img")
  .forEach((itemImgElement) => {
    if (maxHeightImg < itemImgElement.offsetHeight)
      maxHeightImg = itemImgElement.offsetHeight;
  });

document.querySelectorAll(".catalog .item .item__img").forEach((itemImgElement) => {itemImgElement.style.height = maxHeightImg + "px";});


const searchBar = document.querySelector(".search-bar-wrapper input");
searchBar.addEventListener("input", () => {
  document.querySelectorAll(".item").forEach((itemElement) => {
    if (
      itemElement
        .querySelector(".item__title")
        .innerHTML.toLocaleLowerCase()
        .includes(searchBar.value.toLocaleLowerCase())
    )
      itemElement.classList.remove("unvisible");
    else {
      itemElement.classList.add("unvisible");
    }
  });
});

const cart = new Cart();
cart.makeHtmlElement();

function addItemToCart(img, title, desc, price, id) {
  const newCartline = new Cartline(img, title, desc, price, id);
  cart.addCartline(newCartline);
}

document.querySelectorAll(".catalog .item").forEach((item) => {
  item.querySelector(".add-to-cart-btn").addEventListener("click", () => {
    const newCL = new Cartline(
      item.getAttribute("attr_img"),
      item.getAttribute("attr_title"),
      item.getAttribute("attr_desc"),
      item.getAttribute("attr_price"),
      item.getAttribute("attr_id")
    );
    cart.addCartline(newCL);
  });
});


function removeCartline() {
  
  document
    .querySelectorAll(".cart-wrapper .cart-box .cartline")
    .forEach((cl) => {
      cl.querySelector(".delete-cartitem").addEventListener("click", () => {  
        cart.removeCartline(cl.getAttribute("attr-id"));
      });
    });
}

setInterval(() => {
    removeCartline();
}, 100);