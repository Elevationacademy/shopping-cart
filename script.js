var shoppingCartApp = function () {

  var cart = [];
  var total = 0;


  var logCart = function() {
    console.log(cart)
  }


  var addItem = function (item) { /*to add the item to the cart array*/
    

    cart.push(item);
  }


  var sum = function () {
    total = 0
    for (var j = 0; j < cart.length; j++) {

       total += cart[j].price;   /* <-- THE ORDER HERE VERY IMPORTANT!!!!*/
    }

    $('.total').html(total);
  }


  var updateCart = function () { /*to show the item in the cart online*/
    
    $('.cart-list').empty();

    for (var i = 0; i < cart.length; i++) {
      cart[i].id = i + 1;
      var source = $('#store-template').html();
      var template = Handlebars.compile(source);
      var newItem = template(cart[i]);

      $('.cart-list').append(newItem);
    }

    sum();
  }


  var clearCart = function () {
    cart = [];
    $('.cart-list').empty();

    total = 0;
    $('.total').html(total);
  }


  var removeItemFromCart = function (item) {
    var itemToRemove = $(item).closest('p').index();
    cart.splice(itemToRemove, 1);
    updateCart();
  }



  return {

    addItem: addItem,
    sum: sum,
    updateCart: updateCart,
    clearCart: clearCart,
    logCart: logCart,
    removeItemFromCart: removeItemFromCart

  }
}


var app = shoppingCartApp();


$('.view-cart').on('click', function (e) {
  $('.shopping-cart').toggleClass('show');
  e.preventDefault();
});


$('.add-to-cart').on('click', function () {
    // $('.shopping-cart').toggleClass('show');
  var item = $(this).closest('.item').data();  /*  <-- !!super important!!*/

  item.qty = 1;
  
  app.addItem(item);
  app.updateCart();
});


$('.clear-cart').on('click', function () {
  app.clearCart();
});


$('.cart-list').on('click', '.remove-item-from-cart', function () {
  app.removeItemFromCart(this);
});

// update the cart as soon as the page loads!
  app.updateCart();




