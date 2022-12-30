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

/*              
                <div class="cartline">
                    <div class="delete-cartitem" onclick='remvoeCartline("+this.id+")'><i class="fa-solid fa-xmark"></i></div>
                    <div class="item-details-wrapper">
                        <div class="item-img">img</div>
                        <div class="item-text">
                            <h4><span class="qtt">1</span>x title</h4>
                            <p class="desc">desc</p>
                        </div>
                    </div>
                    <p class="total-price"><span>500</span>₪</p>
                </div> 
*/

    makeHtmlElement() {
        return "<div class='cartline' attr-id='" + this.id + "'> <div class='delete-cartitem'><i class='fa-solid fa-xmark'></i></div><div class='item-details-wrapper'><div class='item-img'><img src='" + this.img + "' alt='"+ this.title +"'></div><div class='item-text'><h4><span class='qtt'>"+ this.qtt +"</span>x " + this.title + "</h4><p class='desc'>" + this.desc + "</p></div></div><p class='total-price'><span>" + this.getTotalPrice() + "</span>₪</p></div>"
    }

}