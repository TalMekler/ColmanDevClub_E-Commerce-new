export default class Item {
    constructor(img, title, desc, price, id) {
        this.img = img
        this.title = title
        this.desc = desc
        this.price = price
        this.id = id
    }
    getId() {
        return this.id
    }
    getImg() {
        return this.img
    }
    getTitle() {
        return this.title
    }
    getDesc() {
        return this.desc
    }
    getPrice() {
        return this.price
    }
    setImg(img) {
        this.img = img
    }
    setTitle(title) {
        this.title = title
    }
    setDesc(desc) {
        this.desc = desc
    }
    setPrice(price) {
        this.price = price
    }

    makeHtmlElement() {
        const st = "'" +this.img + "', " + this.title + ", " + this.desc + ", " + this.price + ", " + this.id

          /* Create Item wrapper div */
          const itemDiv = document.createElement("div");
          itemDiv.classList.add("item");
          itemDiv.setAttribute("attr_img", this.img)
          itemDiv.setAttribute("attr_title", this.title)
          itemDiv.setAttribute("attr_desc", this.desc)
          itemDiv.setAttribute("attr_price", this.price)
          itemDiv.setAttribute("attr_id", this.id)
  
          /* create item__img div */
          const item_imgDiv = document.createElement("div");
          item_imgDiv.classList.add("item__img");
  
          /* create img tag */
          const imgElememt = document.createElement("img");
          imgElememt.setAttribute("src", this.img);
          imgElememt.setAttribute("alt", "item img");
  
          /* add img tag to the imgDiv
              add the imgDiv to the itemDiv */
          item_imgDiv.appendChild(imgElememt);
          itemDiv.appendChild(item_imgDiv);

          /* Create item__details */
          const item__detailsDiv = document.createElement("div");
          item__detailsDiv.classList.add("item-details");

          const itemTitle = document.createElement("p");
          itemTitle.classList.add("item__title");
          itemTitle.innerText = this.title;

          const itemDesc = document.createElement("p");
          itemDesc.classList.add("item__desc");
          itemDesc.innerText = this.desc;
          
          const itemPrice = document.createElement("p");
          itemPrice.classList.add("item__price");
          itemPrice.innerHTML = `<span>Price: </span>${this.price}₪`;

          const addToCartElement = document.createElement("div");
          addToCartElement.classList.add("add-to-cart-wrapper");
          const addToCartBtn = document.createElement("button");
          addToCartBtn.classList.add("add-to-cart-btn")
          addToCartBtn.innerText = "Add"

          addToCartElement.appendChild(addToCartBtn);
          item__detailsDiv.appendChild(itemTitle)
          item__detailsDiv.appendChild(itemDesc)
          item__detailsDiv.appendChild(itemPrice)
          item__detailsDiv.appendChild(addToCartElement)

          itemDiv.appendChild(item__detailsDiv)

          return itemDiv;

    }
}