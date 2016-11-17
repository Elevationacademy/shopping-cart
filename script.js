var cart = [];

var updateCart = function () {
  $('.cart-list').empty()

  var source = $('#items').html();
  var template = Handlebars.compile(source);

  for (i=0; i < cart.length; i ++){  
    var newHTML = template(cart[i]);
    $('.cart-list').append(newHTML);
  } 

  $('.total').empty ()
  var total = 0

  for (i=0; i<cart.length; i++) {
    total = total + (cart[i].price*cart[i].amount)
  }

  $('.total').append(total)
}

var addItem = function (x) {
  var exists = false;

  for(var i = 0; i < cart.length; i ++){
    if(cart[i].name === x.name){
      exists = true;
      cart[i].amount += 1;
    }
  }

  if(!exists){
    cart.push(x)
  }
}

var eraseItem = function (num) {
  cart.splice(num, 1);
  updateCart();
}

var clearCart = function () {
  cart.length = 0;
  updateCart();
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show')
});

$('.add-to-cart').on('click', function () {
  item = {
    name : $(this).closest('.card').data().name,
    price : $(this).closest('.card').data().price,
    amount: 1
  }

  addItem(item);
  updateCart();
});

$('.cart-list').on('click', '.del-item',function () {
  var index = $(this).closest('li').index()
  $(this).closest('li').remove();
  eraseItem(index);
});

$('.clear-cart').on('click', function () {
  clearCart();
});

updateCart();