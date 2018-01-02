// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  var totalPrice = 0;
  clearCart();
  for (var i = 0; i < cart.length; i++) {
    var source = $('#liCart-template').html();
    var template = Handlebars.compile(source);
    var cartName = cart[i].name;
    var cartPrice = cart[i].price;
    var liCartTemplate = template({name:cartName , price:cartPrice});
    totalPrice += cartPrice;
    console.log(totalPrice);
    $('.cart-list').append(liCartTemplate)  ;
    $('.total').html(totalPrice);
  }
}

  var clearCartArray = function(){
    cart = [];
    $('.total').html(0);
  }

var addItem = function (item) {

  // TODO: Write this function. Remember this function has nothing to do with display.
  cart.push(item);
  console.log(cart);

  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  $('.cart-list').empty();
  
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page

  var item = {
    name: $(this).closest('.item').data().name,
    price: $(this).closest('.item').data().price
  }
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCartArray();
  updateCart();
});


// update the cart as soon as the page loads!
updateCart();
