var cart = [];
var STORAGE_ID = 'shoppingCart';
var getFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
}

cart = getFromLocalStorage();

var updateCart = function () {
  $('.cart-list').empty();
  $('.total').html('0');

  for (var i = 0; i < cart.length; i ++) {
    var template = Handlebars.compile($('#cart-template').html())
    var newItem = template(cart[i]);

    $('.cart-list').append(newItem);
    $('.total').html(calculateTotal());
  }
  removeObj();
}

var calculateTotal = function () {
  var total = 0;
  for (var i = 0; i < cart.length; i ++) {
    total += cart[i].price;
  }

  return total;
}

var saveToLocalStorage = function () {
  localStorage.setItem(STORAGE_ID, JSON.stringify(cart));
}

var addItem = function (item) {
  cart.push(item);
  saveToLocalStorage(item);
}

var removeObject = function (currentItem) {
  var $clickedItem = $(currentItem).closest('.cartItem');
  var index = $clickedItem.index();
  cart.splice(index, 1);
  $clickedItem.remove();
  saveToLocalStorage();
}

var clearCart = function () {
  cart = [];
  updateCart();
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  var item = $(this).closest('.item').data();
  addItem(item);
  updateCart();
});

var removeObj = function() {
  $('.removeItem').on('click', function() {
    removeObject(this);
    updateCart();
  });
};

$('.clear-cart').on('click', function () {
  clearCart();
});

updateCart();