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

    makeHtmlItem() {
        const st = "'" +this.img + "', " + this.title + ", " + this.desc + ", " + this.price + ", " + this.id
        return "<div class='item' attr_img='"+ this.img +"' attr_title='" + this.title + "' attr_desc='" + this.desc + "' attr_price='" + this.price + "' attr_id='" + this.id +"'> <div class='item__img'><img src='" + this.img + "' alt='item img'></div><div class='item-details'><p class='item__title'>" + this.title + "</p><p class='item__desc'>" + this.desc + "</p><p class='item__price'><span>Price: </span>" + this.price + "₪</p> <div class='add-to-cart-wrapper'><button class='add-to-cart-btn'>Add</button></div></div></div>"
    }
}