var obj = {cart: []};
var total = 0


var updateCart = function () {
  $('.cart-list').empty()
  $('.total').empty ()
  total = 0
  for (i=0; i<obj.cart.length; i++) {
    total = total + obj.cart[i].price
  }
  var source = $('#items').html();
  var template = Handlebars.compile(source);
  var newHTML = template(obj);
  $('.cart-list').append(newHTML);
  $('.total').append(total)
}

var addItem = function (x) {
  obj.cart.push(x)
}

var clearCart = function () {
  obj.cart.length = 0;
  updateCart();
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show')
});

$('.add-to-cart').on('click', function () {
  // *******works, but is this the best way???
  item = {
    name : $($(this.closest('.card')).data().name).selector,
    price : $($(this.closest('.card')).data().price)[0]
  }
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();