  // TODO: get the "item" object from the page

//this is .add-to-cart
$('.add-to-cart').on('click', function () {
    var name = ($(this).parent().parent().data().name);
    var price = ($(this).parent().parent().data().price);
    var item = {name:name, price:price} //create object
// Cart count update when addtocart is clicked
if (cartCount%2 === 0) {
cartCount++;
}

//console.log(name + price); - test
 addItem(item);
 updateCart();
});
