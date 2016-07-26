

// an array with all of our cart items
var cart = {
  items: []
};

var cartTotal = 0;

var updateCart = function () {
  // // TODO: finish

  var $cart = $('.cart-list');
  $cart.empty();



  //handlebars 
  var source = $('#cart-template').html();
  var template = Handlebars.compile(source);
  // append our new html to the page
  var newHTML = template(cart);
  $('.cart-list').append(newHTML);
}



var addItem = function (item) {
  
  var itemName = item.name;
  var itemPrice = item.price;
  cartTotal += item.price;

  cart.items.push(item);
  
  document.getElementById('total').innerHTML = cartTotal;


  console.log(item)
}


var clearCart = function () {
  cart.items = [];
  var $cart = $('.cart-list');
  $cart.empty();
  cartTotal = 0;
  document.getElementById('total').innerHTML = cartTotal;
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $(".shopping-cart").toggleClass( 'show');
});


$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.card').data();
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();