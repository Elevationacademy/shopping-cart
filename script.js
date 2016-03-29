// an array with all of our cart items
var cart = [];
var $cart = $('.cart-list');

var updateCart = function () {
  $cart.empty();
  var source = $('#cart-template').html();
  var template = Handlebars.compile(source);
  var totalPrice = 0;

  for (var i = 0; i < cart.length; i++) {
    var item = template(cart[i]);
    totalPrice += cart[i].price;
    $('.cart-list').append(item);
  }
  console.log(totalPrice);
 
  $('.total').html(totalPrice);
}

var addItem = function (item, price) {
  var stuff = { 
  item: item,
  price: price
  }
  cart.push(stuff)
}

var clearCart = function () {
  $cart.empty();
  $('.total').html(0);
  cart = [];
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
  var item = $(this).closest("item").data('name');
  var price = $(this).closest("item").data('price');
  updateCart();
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.item').data('name');
  var price = $(this).closest('.item').data('price');
  addItem(item, price);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();