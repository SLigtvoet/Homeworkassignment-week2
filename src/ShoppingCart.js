module.exports = class ShoppingCart {
    // class ShoppingCart {
    constructor() {
        this.items = []
    }
    getItems() {
        return this.items
    }
    // will push the items with given values to the item array
    addItem(name, quantity, pricePerUnit) {
        this.items.push({
            name,
            quantity,
            pricePerUnit
        })
    }
    // clears the items array of ShoppingCart when called.
    clear() {
        while (this.items.length) {
            this.items.pop();
        }
    }

    clone() {
        //    return new ShoppingCart;
        const deepClone = new ShoppingCart
        deepClone.items = JSON.parse(JSON.stringify(this.getItems()))
        return deepClone
    }


}