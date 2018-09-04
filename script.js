const ShoppingCart = function () {

  const cart = [];

  const updateCart = function () {
    $('.cart-list').empty();
    const source = $('#shopping-cart-list-template').html();
    const template = Handlebars.compile(source);
    const html = template({list: cart});
    let totalPrice = 0;
    for(let i in cart) {
      totalPrice += cart[i].price;
    }
    $('.total').html(totalPrice);
    $('.cart-list').append(html);
  }


  const addItem = function (item) {
    const newItem = {
      name: item.name,
      price: item.price
    }
    cart.push(newItem);
  }

  const clearCart = function () {
    cart.splice(0);
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
  $('.shopping-cart').toggleClass("show");
});

$('.add-to-cart').on('click', function () {
  let item = {};
  let $cardItem = $(this).closest('.card-item');
  item.name = $cardItem.data('name');
  item.price = $cardItem.data('price');
  app.addItem(item);
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.clearCart();
  app.updateCart();
});