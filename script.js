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
    // Check each one's quantity. if more than 1, add a visual cue.

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
  // Before pushing, check if it exists. If it does, update its quantity property, otherwise push as normal.
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
  item.quantity = 1; // now each clicked item gets a quantity property
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