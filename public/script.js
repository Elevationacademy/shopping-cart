// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
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
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  var newItem = {
    name: item.children('.card').data().name,
    price: item.children('.card').data().price
  }
  cart.push(newItem);
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  cart = [];
  updateCart();
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggle();
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).parent().closest('.card-container');
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
