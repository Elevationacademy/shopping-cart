// an array with all of our cart items
var source = $('#cartHB').html();
var template = Handlebars.compile(source)
var cart = [];

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  var total = 0;
  clearCart();
 
  for (var i = 0; i < cart.length; i++) {
    var newHtml = template({item: cart[i].name,  price: cart[i].price});
    $('.cart-list').append(newHtml);
    total += cart[i].price
  //  addItem(cart[i]);
  }
  
  $('.total').append(total)
}


var addItem = function (item) {
  cart.push(item);
}

var clearCart = function () {
   $('.cart-list').empty();
   $('.total').empty();
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show')
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.item').data();
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
