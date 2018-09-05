const ShoppingCart = function () {

  const STORAGE_ID = 'shoppingcart'

  // an array with all of our cart items
  const cart = [];

  const updateCart = function () {
    let source = document.getElementById("cart-list-template").innerHTML;
    let template = Handlebars.compile(source);
    let storageCart = getFromLocalStorage();
    let items = template({cart: storageCart});

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
    saveToLocalStorage();
    app.updateCart();
  }

  const clearCart = function () {
    cart.splice(0);
    saveToLocalStorage();
    updateCart();
  }

  const saveToLocalStorage = function () {
    localStorage.setItem(STORAGE_ID, JSON.stringify(cart));
  }

  const getFromLocalStorage = function () {
    return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
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
});

$('.clear-cart').on('click', function () {
  app.clearCart();
});