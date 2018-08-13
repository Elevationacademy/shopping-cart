var ShoppingCart = function () {

  const _source = $("#cart-template").html();
  const _template = Handlebars.compile(_source);

  // an array with all of our cart items
  var cart = [];

  var updateCart = function () {
    const cartContext = { items: cart };
    $('.cart-list').html(_template(cartContext));
    $('.total').text(_getTotal());
  }


  var addItem = function (item) {
    cart.push(item);
  }

  var clearCart = function () {
    cart = [];
  }

  function _getTotal() {
    let total = 0;
    for (let item of cart) {
      total += item.price;
    }
    return total;
  }

  return {
    // cart,
    updateCart,
    addItem,
    clearCart
  }
};

var app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();


//--------EVENTS---------

// hide/show the shopping cart
$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  const itemData = $(this).closest('.item').data();
  app.addItem({
    name: itemData.name,
    price: itemData.price
  });
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.clearCart();
  app.updateCart();
});