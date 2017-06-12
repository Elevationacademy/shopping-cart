// an array with all of our cart items
var cart = [];
var id = 0;

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  $('.cart-list').empty();
  var source = $('#cart-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(cart);
  console.log(newHTML);
  $('.cart-list').append(newHTML);
  var sum = sumPrice(cart);
  $('.total').text(sum);
}


var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  cart.push(item);
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  cart = [];
  updateCart();
}

var sumPrice = function(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum+=arr[i].price;
  }
  return sum;
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  var display_property = $('.shopping-cart').css('display');
  display_property=='none'? $('.shopping-cart').css('display', 'block'): $('.shopping-cart').css('display', 'none');
  // ;('.show');
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var name = $(this).closest('.card').data('name');
  var price = $(this).closest('.card').data('price');
  var item = {name: name, price: price};
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

$('.cart-list').on('click','.remove-item', function() {
  var index = $(this).parent().index();
  cart.splice(index,1);
  updateCart();
});
// update the cart as soon as the page loads!
updateCart();
