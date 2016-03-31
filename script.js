// an array with all of our cart items
var STOR = 'shopping';
var cart = [];
var total = 0;


var remove = function(){
  $('.remove').on('click', function () {
  var index = $(this).closest('.cart-item').index()
  cart.splice(index,1);
  $(this).closest('.cart-item').remove();

   saveToLocalStorage();
});

}

var removeLocalStorage = function(){
  localStorage.removeItem(STOR);
  location.reload();

}

var saveToLocalStorage = function (item) {
  localStorage.setItem(STOR, JSON.stringify(cart));
}

var getFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem(STOR) || '[]');
}

cart = getFromLocalStorage();

var updateCart = function () {
  $('.cart-list').empty();

  total = 0;

  for (var i =0;i < cart.length; i++) {
    var source = $('#new-item-template').html();
    var template = Handlebars.compile(source);
    var newHtml = template(cart[i]);
    
    var itemPrice = cart[i].price;
    total  += itemPrice;
    $('.cart-list').append(newHtml);
  }

  $('.total').html(total);
  remove();
}


var addItem = function (item) {
  
  if(itemExists(item)){
    updateItemQty(item);
  }
  else{
    cart.push(item);    
  }



 saveToLocalStorage(cart[0]);

  updateCart();
}

function updateItemQty(item){
  for(var i = 0; i < cart.length; i++){

    if(cart[i].product == item.product){
      cart[i].qty++;
    }  
  }
}
function itemExists(item){

  for(var i = 0; i < cart.length; i++){

    if(cart[i].product == item.product){
      return true;
    }
  }
  return false;
}

var clearCart = function () {
  $('.cart-list').empty();
  $('.total').html(0);

  cart =[];
}


$('.view-cart').on('click', function () {
  $('.shopping-cart').toggle('show');
});

$('.add-to-cart').on('click', function () {
  var item = {
    product: $(this).closest('.card').data().name,
    price: $(this).closest('.card').data().price,
    qty: 1
  }

  addItem(item);
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();