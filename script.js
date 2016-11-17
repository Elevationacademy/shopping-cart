
// Keep a running total of the cost of the items in the shopping cart.

// Clear the items in the cart when you press the "clear" button.
// When you're done, do a pull request! Refer to this page for help with this part.


// an array with all of our cart items
var cart = [];

var updateCart = function () {
  //empty cart somehow
  $('.cart-list').empty();
  // var source = $('#cart-template').html();
  // var template = Handlebars.compile(source);
  for (var i = 0; i <cart.length; i++){ 
    var source = $('#cart-template').html();
    var template = Handlebars.compile(source);
    var obj = {item: cart[i].name, quantity: cart[i].quantity, price: cart[i].price};
    newHTML = template(obj);
    $('.cart-list').append(newHTML);
    $('.total').html(total);
  }
};

var total = 0;

var addItem = function (item) {
  // check if the item exists in the array, if it doesn't
  var exists = false;

  for(var i = 0; i < cart.length; i ++){
    // if card item name is = to an item in the array already  (if card item exists once)
    if(item.name === cart[i].name){
      cart[i].quantity += 1;
      total += cart[i].price;
      exists = true;
    }
  }
  if(exists === false){
    cart.push(item);
    total += cart[i].price;
  }
};

var clearCart = function () {
  // TODO: finish
  $('.cart-list').empty();
  cart = [];
  $('.total').empty();
  total = 0;
  $('.total').html(total);
};

$('.view-cart').on('click', function () {
    $('.shopping-cart').toggleClass("show");
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var name = $(this).closest('.card').data().name;
  var price = $(this).closest('.card').data().price;

  var item = {name: name, price: price, quantity: 1};

  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();