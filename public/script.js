// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
}


var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
    var price = parseInt(item.attr('data-price'));
    var name = item.attr('data-name');
    $('.cart-list').append('<p>' + name + ' - ' + price + '</p>');
    var currVal = parseInt($('.total').text());
    currVal+=price;
    $('.total').text(currVal);
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
    $('.cart-list').empty();
    $('.total').text(0);
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
    $('.shopping-cart').toggle();
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest(".card.item");
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
