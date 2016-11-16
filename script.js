
// Keep a running total of the cost of the items in the shopping cart.

// Clear the items in the cart when you press the "clear" button.
// When you're done, do a pull request! Refer to this page for help with this part.


// an array with all of our cart items
var cart = [];

var updateCart = function () {
  //empty cart somehow
  $('.cart-list').empty();
  var source = $('#cart-template').html();
  var template = Handlebars.compile(source);
  for (var i = 0; i <cart.length; i++){ 
    var obj = {item: cart[i].name, price: cart[i].price};
    newHTML = template(obj);
    $('.cart-list').append(newHTML);
  }
  // var total = 50;
  //   $('.total').append(total);
};

var addItem = function (item) {
 // cart.push(item);
  // write a function that checks if the item exists, if not, add it. if exists, item++
  // empty 
  //Conditoin A: if the cart array is empty add to cartond
  //condition B: if the item exists, increase item's occurrence
  
  for(var i = 0; i < cart.length; i++){
   var itemExist = cart.item;
   if(cart.length === 0){
    cart.push(item);
   }
   
 }
};

var clearCart = function () {
  // TODO: finish
};

$('.view-cart').on('click', function () {
    $('.shopping-cart').toggleClass("show");
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  // var name = $(this).closest('.card.item').data().name;
  // var price = $(this).closest('.card.item').data().price;
  var item = $(this).closest('.card.item').data();

  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();