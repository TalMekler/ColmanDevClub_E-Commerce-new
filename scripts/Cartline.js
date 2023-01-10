import Cart from "./Cart"

export default class Cartline { 
    constructor(img, title, desc, pricePerOne, id) {
        this.img = img
        this.title = title
        this.desc = desc
        this.pricePerOne = pricePerOne
        this.id = id
        this.qtt = 1
    }

    isEqual(other){
        if (this.id == other.id){
            return true
        }else{
            return false
        }
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
    getPricePerOne() {
        return this.pricePerOne
    }
    getID() {
        return this.id
    }
    getQtt() {
        return this.qtt
    }
    setQtt(qtt){
        this.qtt = qtt
    }
    getTotalPrice() {
        return this.qtt * this.pricePerOne
    }

    makeHtmlElement() {

        const cartlineDiv = document.createElement("div");
        cartlineDiv.classList.add("cartline");
        cartlineDiv.setAttribute("attr-id", this.id);

        const deleteCartItem = document.createElement("div");
        deleteCartItem.classList.add("delete-cartitem");
        const xIcon = document.createElement("i");
        xIcon.classList.add("fa-solid");
        xIcon.classList.add("fa-xmark");
        deleteCartItem.appendChild(xIcon);

        const itemDetailsWrapperDiv = document.createElement("div");
        itemDetailsWrapperDiv.classList.add("item-details-wrapper");

        const itemImgDiv = document.createElement("div");
        itemImgDiv.classList.add("item-img");
        const itemImgElement = document.createElement("img");
        itemImgElement.setAttribute("src", this.img);
        itemImgElement.setAttribute("alt", this.title);
        itemImgDiv.appendChild(itemImgElement);

        const itemText = document.createElement("div");
        itemText.classList.add("item-text");
        const itemTitle = document.createElement("h4");
        itemTitle.innerHTML = `<span class='qtt'>${this.qtt}</span>x ${this.title}`;
        const itemDesc = document.createElement("p");
        itemDesc.classList.add("desc");
        itemDesc.innerText = this.desc;
        itemText.appendChild(itemTitle) // add title
        itemText.appendChild(itemDesc) // add desc

        itemDetailsWrapperDiv.appendChild(itemImgDiv)
        itemDetailsWrapperDiv.appendChild(itemText)

        const totalPrice = document.createElement("p");
        totalPrice.classList.add("total-price");
        totalPrice.innerHTML = `<span>${this.getTotalPrice()} </span>₪`;

        cartlineDiv.appendChild(deleteCartItem)
        cartlineDiv.appendChild(itemDetailsWrapperDiv)
        cartlineDiv.appendChild(totalPrice)

        return cartlineDiv;
    }

}