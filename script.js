// an array with all of our cart items
var STOR = 'shopping';
var cart = [];
var total = 0;

cart = getFromLocalStorage();

var saveToLocalStorage = function (item) {
  localStorage.setItem(STOR, JSON.stringify(cart));
}

var getFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem(STOR) || '[]');
}


var updateCart = function () {
  $('.cart-list').empty();

  total = 0;

  for (var i =0;i < cart.length; i++) {
    var source = $('#new-item-template').html();
    var template = Handlebars.compile(source);
    var newHtml = template(cart[i]);
    
    var itemPrice = cart[i].price;
    total  += itemPrice;

    $('.cart-list').append(newHtml);
  }

  $('.total').html(total);
}


var addItem = function (item) {
  cart.push(item);
  saveToLocalStorage(cart[0]);

  updateCart(cart[0].item);
}

var clearCart = function () {
  $('.cart-list').empty();
  $('.total').html(0);

  cart =[];
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggle('show');
});

$('.add-to-cart').on('click', function () {
  var item = {
    product: $(this).closest('.card').data().name,
    price: $(this).closest('.card').data().price
  }

  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();