import Item from "./Item"

export default class Catalog {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }
    setItems(items) {
        this.items = items
    }
    addItem(item) {
        this.items.push(item);
        document.querySelector(".catalog").appendChild(item.makeHtmlElement())
    }
}