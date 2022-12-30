import Cartline from "./Cartline"

export default class Cart {
    constructor() {
        this.cartlines = []
        this.numberOfItems = 0
        this.totalPrice = 0
    }

    getCartlines() {
        return this.cartlines
    }
    getNumberOfItem() {
        return this.numberOfItems
    }
    getTotalPrice() {
        this.totalPrice = this.calcTotalPrice()
        return this.getTotalPrice
    }
    setCartlines(cartlines){
        this.cartlines = cartlines
    }
    setNumberOfItems(numberOfItems){
        this.numberOfItems = numberOfItems
    }

    calcTotalPrice() {
        let s = 0
        this.cartlines.forEach(cl => {
            s += parseInt(cl.getTotalPrice())
        })
        return s
    }

    isCartlineExist(cartline) {
        console.log("isCartlineExist, wanted cartline id = " + cartline.getID());
        
        for(let i = 0; i< this.cartlines.length; i++) {
            const res = (this.cartlines[i].getID() == cartline.getID());
            if(res == true){
                console.log("res: " + (res)); 
                return true;
            }
        }
        return false;
    }

    getCartlineByID(id) {
        for(let i = 0; i< this.cartlines.length; i++) {
            const res = (this.cartlines[i].getID() == id);
            if(this.cartlines[i].getID() == id){
                return this.cartlines[i];
            }
        }
        return null
    }

    addCartline(cartline) {
        if(this.isCartlineExist(cartline)){
            console.log("TRUE!");
            const cl = this.getCartlineByID(cartline.getID())
            cl.setQtt(cl.getQtt() + 1)
            this.setNumberOfItems(this.getNumberOfItem + 1)
            console.log(this.cartlines);
        }else {
            this.cartlines.push(new Cartline(cartline.getImg(), cartline.getTitle(), cartline.getDesc(), cartline.getPricePerOne(), cartline.getID()))
            this.setNumberOfItems(this.getNumberOfItem + 1)
        }
        console.log("cart: " + this.cartlines);
        this.makeHtmlElement()
    }

    removeCartline(id) {
        console.log("getCartLine"+this.getCartlineByID(id));
        if(this.getCartlineByID(id) != null){
            console.log("inside");
            const cl = this.getCartlineByID(id)
            let i;
            for(i = 0; i < this.cartlines.length; i++) {
                if(id == this.cartlines[i].getID()){
                    break;
                }
            }
            this.cartlines.splice(i, 1);
            if(this.cartlines.length == 0) {
                document.querySelector(".cart-wrapper").classList.toggle("active");
                document.querySelector(".catalog").classList.toggle("active");
            }
        }
        this.makeHtmlElement()
        
        // console.log(this.cartlines);
    }

    makeHtmlElement() {
        const cartBox = document.querySelector(".cart-box");
        cartBox.innerHTML = ""
        this.cartlines.forEach(cl => {
            cartBox.innerHTML += cl.makeHtmlElement()
        })

        document.querySelector(".cart-summary .total-price span").innerText = this.calcTotalPrice()
    }
}