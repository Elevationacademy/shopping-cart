

  var saveToLocalStorage = function () {
  localStorage.setItem(STORAGE_ID, JSON.stringify(posts));
  }


 var getFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
  }


// an array with all of our cart items
var cart = {
  items: []
};

var cartTotal = 0;

var updateCart = function () {
  // // TODO: finish

  var $cart = $('.cart-list');
  $cart.empty();



  //handlebars 
  var source = $('#cart-template').html();
  var template = Handlebars.compile(source);
  // append our new html to the page
  var newHTML = template(cart);
  $('.cart-list').append(newHTML);
}



var addItem = function (item) {
  
  var itemName = item.name;
  var itemPrice = item.price;
  cartTotal += item.price;

  cart.items.push(item);
  
  document.getElementById('total').innerHTML = cartTotal;

  
  console.log(item)
}

var removeItem = function (removeItem) {
  // function to splice out the item that received the button click from the items array
  
  
  $(removeItem).closest(".item-line").remove();
  // console.log(cart.items.indexOf(this))
  

  console.log ("remove button selected")
}


var clearCart = function () {
  cart.items = [];
  var $cart = $('.cart-list');
  $cart.empty();
  cartTotal = 0;
  document.getElementById('total').innerHTML = cartTotal;
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $(".shopping-cart").toggleClass( 'show');
});


$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.card').data();
  addItem(item);
  $('.remove-button').bind();
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

$('.cart-list').on('click','.remove-button', function () {
  removeItem(this);
});


// update the cart as soon as the page loads!
updateCart();