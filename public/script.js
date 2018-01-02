// an array with all of our cart items
var cart = [];

var updateCart = function () {
  $('.cart-list').empty();
  var total = 0;
  var source = $('#cart-item').html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < cart.length; i++) {
    var cartItem = template(cart[i]);
    $('.cart-list').append(cartItem);
    total += cart[i].price;
  }
  $('.total').text(total);
}

var addItem = function (item) {
  var newItem = {
    name: item.children('.card').data().name,
    price: item.children('.card').data().price
  }
  cart.push(newItem);
}

var clearCart = function () {
  cart = [];
  updateCart();
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggle();
});

$('.add-to-cart').on('click', function () {
  var item = $(this).parent().closest('.card-container');
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
