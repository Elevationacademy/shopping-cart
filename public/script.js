var ShoppingCart = function () {

  // an array with all of our cart items
  var cart = [];
 

  var updateCart = function () {
    // TODO: Write this function. In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // Remember to empty the "cart div" before you re-add all the item elements.
    total = 0;
    $('.cart-list').empty();
  
    for (let i = 0; i < cart.length; i++) {
      var itemHTML = "<p>" + cart[i].name + "  $" + "<span class='item-price'>" + cart[i].price + "</span></p>"
      total += cart[i].price;
      $('.cart-list').append(itemHTML);
       }
    $('.total').empty();
    $('.total').append(total);
  }

  

  var addItem = function (item) {
    cart.push(item);
    console.log(cart);
  }

  var clearCart = function () {
    // TODO: Write a function that clears the cart ;-)
    //$('.cart-list').remove();
    //total = 0;
    $('.total').empty();
    $('.total').text(0);
    cart = [];
    updateCart();

    
  }



  return {
    updateCart: updateCart,
    addItem: addItem,
    clearCart: clearCart,

  }
};
// update the cart as soon as the page loads!
var app = ShoppingCart();


app.updateCart();


//--------EVENTS---------

$('.view-cart').on('click', function () {

  $('.shopping-cart').toggleClass('show');

});

$('.add-to-cart').on('click', function () {
  var item = {}
  item.name = $(this).closest('.item').data().name;
  item.price = $(this).closest('.item').data().price;

  app.addItem(item);
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.clearCart();
});