const checkout = {

items: [],

total: 0,

addItem(item) {
    // convert the price into number
    const priceNum  = Number(item.price)

    // checking price is a positive number and not NaN
    if (typeof priceNum !== 'number' || isNaN(priceNum) || priceNum < 0) {
      console.log("Invalid price.");
      return;
    }



this.items.push(item);

this.total += priceNum;

},

getTotal() {

    //  issue corrected
return `Total:- $${parseFloat(this.total).toFixed(2)}`  }

}
checkout.addItem({ name: "Coffee Maker", price: "99.95" });

checkout.addItem({ name: "Milk", price: 3.50 });

console.log(checkout.getTotal()); // Expected issue !

