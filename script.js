
var cart = [];

var updateCart = function () {
  clearCart();
  for(var i=0; i<cart.length;i++){
    $('.cart-list').append('<li>' + cart[i].data().name + "- $" + cart[i].data().price + '</li>');
  }
}
var addItem = function (item) {
  cart.push(item);
  var total=0;
  for(var i = 0; i<cart.length; i++){
      total+=cart[i].data().price;
  }
  $('.total').html(total);
  }

var clearCart = function () {
  $('.cart-list').empty();
}

$('.view-cart').on('click', function () {
   $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  var item = $(this).parent().parent();
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
  cart.length=0;
  $('.total').empty();
});

updateCart();