// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.

  $('.cart-list').empty();
  $('.total').text(0);

  var total = 0;
  for (var i in cart) {
    $('.cart-list').append('<span>' + cart[i].name + ' - ' + cart[i].price + '</span> <br>');
    total += parseInt(cart[i].price.slice(2));
  }

  $('.total').text(total);

}


var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)

  cart.push(item);
  console.log(cart);
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  $('.total').text(0); // set back the total to $ 0
  cart.length = 0; // empty all the cart array 
  $('.cart-list').empty(); // empty the cartlist from page
}

var toggle = false;
$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  // $('.shopping-cart').toggleClass('.show');

  if (!toggle) {
    toggle = true;
    $('.shopping-cart').css('display', 'block');
  }
  else {
    toggle = false;
    $('.shopping-cart').css('display', 'none');
  }
});


$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var $clickedItem = $(this).closest('.card.item');

  console.log($clickedItem.find('.price').text());
  console.log($clickedItem.data().name);

  var item = {
    name: $clickedItem.data().name,
    price: $clickedItem.find('.price').text()
  }
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();


$('.navbar-toggle.collapsed').on('click', function () {
  $('.shopping-cart').css('display', 'block');
  $('.view-cart').css('display', 'none');
  // $('.shopping-cart').toggleClass('.show');
})
