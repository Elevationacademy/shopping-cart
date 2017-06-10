var cartTotal=0;
var updateCart = function () {
  $(".cart-list").empty();
  cartTotal = 0;
  var map={};

  for (var i=0 ; i< cart.length ; i++) {
    var key = cart[i].name;
    if (map[key]) {
      map[key].quantity++;
    }//if object is in the map
    else {
      map[key] = {
        name: key,
        price: cart[i].price,
        quantity: 1
      }//make object
    }//else object is not on the map- make it
  }//for making the map
    for ( var j in map){
    $(".cart-list").append("<p>"+map[j].name+"("+map[j].quantity+") -$"+map[j].price+"</p>");
   cartTotal = cartTotal+(map[j].price*map[j].quantity);
 }// for each
 if (cart.length == 0) {
   viewCART(false);
    //  $(".total").empty();
    //  $(".total").append(cartTotal);
 } else {
viewCART(true);
  $(".total").empty();
  $(".total").append(cartTotal);
};
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
}
