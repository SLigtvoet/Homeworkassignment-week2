

module.exports = class ShoppingCart {
// class ShoppingCart {
    constructor(){
        this.items = []
    }
    getItems(){
        return this.items
    }
    
    addItem(name,quantity,pricePerUnit){
        this.items.push({name,quantity,pricePerUnit})
    }

    clear(){
        while (this.items.length) { this.items.pop(); }
    }

    clone(){
    //    return new ShoppingCart;
    const deepClone = new ShoppingCart
    deepClone.items = JSON.parse(JSON.stringify(this.getItems()))
    return deepClone
     }


}

// module.exports = class ShoppingCart {}
// module.exports = (ShoppingCart)