

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
      return this.getItems()
     }
        


}

// module.exports = class ShoppingCart {}
// module.exports = (ShoppingCart)