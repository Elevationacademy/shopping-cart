// an array with all of our cart items
var cart = [];

var updateCart = function () {
  $('.cart-list').empty();
      var total = 0;
  if (cart.length > 0) {
      var source = $('#cart-item').html();
      var template = Handlebars.compile(source);
      for (var i = 0; i < cart.length; i++) {
          var cartItem = template(cart[i]);
          $('.cart-list').append(cartItem);
          total += (cart[i].price * cart[i].amount);
      }
  }
  $('.total').text(total);
}


var addItem = function (item) {
  var name = item.children('.card').data().name;
  var isInCart = _checkIfItemIsInCart(name);
  if (isInCart) {
    var index = _getIndexByName(name);
    cart[index].amount = ++cart[index].amount;
  } else {
    var newItem = {
      name: item.children('.card').data().name,
      price: item.children('.card').data().price,
      amount: 1
    }
    cart.push(newItem);
  }
}

var clearCart = function () {
  cart = [];
  updateCart();
}

var removeCartItem = function(item) {
  var index = _getIndexByName(item.parent().data().name);
  cart.splice(index, 1);
  updateCart();
}

var _checkIfItemIsInCart = function (item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === item) {
      return true;
    }
  }
  return false;
}

var _getIndexByName = function (name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      return i;
    }
  }
}

var addToCart = function($this) {
  var item = $this.parent().closest('.card-container');
  addItem(item);
  updateCart();
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  addToCart($(this));
});

$('.clear-cart').on('click', function () {
  clearCart();
});

$('.shopping-cart').on('click', '.remove-cart-item', function() {
removeCartItem($(this));
});

$('.new-listings').on('click', '.add-to-cart', function() {
  addToCart($(this));
});

// update the cart as soon as the page loads!
updateCart();
