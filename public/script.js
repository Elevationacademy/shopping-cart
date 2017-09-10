// an array with all of our cart items
var cart = [];
var cartTemplate = Handlebars.compile($('#cart-template').html());

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  $('.cart-list').empty();
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    $('.cart-list').append(cartTemplate(cart[i]));
    total += cart[i].price;
  }
  $('.total').text(total);
}


var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  cart.push(item);
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  this.cart = [];
  this.updateCart();
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  var $shoppingCart = $('.shopping-cart');
  // if($shoppingCart.hasClass('show')) {
  //   $shoppingCart.removeClass('show');
  // } else {
  //  $shoppingCart.addClass('show');    
  // }
  $shoppingCart.toggle();
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = {
    name : $(this).closest('.item').data().name,
    price: $(this).closest('.item').data().price
  };

  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
