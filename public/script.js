const ShoppingCart = function () {

  // an array with all of our cart items
  const cart = [];

  const updateCart = function () {
    let source = document.getElementById("cart-list-template").innerHTML;
    let template = Handlebars.compile(source);
    let items = template({cart: cart});

    let $cartList = $('.shopping-cart').find('.cart-list');
    let $totalPrice = $('.shopping-cart').find('.total');
    
    $cartList.empty();
    $cartList.append(items);
    $totalPrice.html(getTotalPrice());
  }

  const getTotalPrice = function () {
    let total = 0;
    for (let item of cart) {
      total += item.price;
    }
    return total;
  }

  const addItem = function (name, price) {
    let item = { name, price };
    cart.push(item);
  }

  const clearCart = function () {
    cart.splice(0);
    updateCart();
  }
  
  return {
    updateCart: updateCart,
    addItem: addItem,
    clearCart: clearCart
  }
};

const app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();

//--------EVENTS---------

$('.view-cart').on('click', function () {
  let $shoppingCart = $('.shopping-cart');

  if ($shoppingCart.hasClass('show')) {
    $shoppingCart.removeClass('show');
  } else {
    $shoppingCart.addClass('show');
  }
});

$('.add-to-cart').on('click', function () {
  let item = $(this).closest('.item');
  let itemName = item.data('name');
  let itemPrice = item.data('price');

  app.addItem(itemName, itemPrice);
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.clearCart();
});