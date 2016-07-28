

 var STORAGE_ID = 'shopping-cart';

 var getFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');

  }


// an array with all of our cart items
  var cart = {
    items: getFromLocalStorage ()
  };


  var saveToLocalStorage = function () {
  localStorage.setItem(STORAGE_ID, JSON.stringify(cart.items));
  localStorage.setItem('cartTotal', cartTotal);
  }


  var cartTotal = Number(localStorage.getItem('cartTotal'));
  document.getElementById('total').innerHTML = cartTotal;


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


  
  document.getElementById('total').innerHTML = cartTotal;

  // for (i = 0; i < cart.items; i ++) {
  //   cartTotal += cart.items[i].itemPrice;
  // }

  cart.items.push(item);
  saveToLocalStorage();
  

  

  
  console.log(item)
}

var removeItem = function (passedIndex) {
  // function to splice out the item that received the button click from the items array

  // console.log("item price to subtract is " + cart.items[0].price);
 
  cartTotal -= cart.items[passedIndex].price;
  cart.items.splice(passedIndex ,1);
  console.log(cart.items);
  // $(this).closest(".cart-item-wrapper").remove();
  
  document.getElementById('total').innerHTML = cartTotal;
  saveToLocalStorage();
}


var clearCart = function () {
  cart.items = [];
  var $cart = $('.cart-list');
  $cart.empty();
  cartTotal = 0;
  document.getElementById('total').innerHTML = cartTotal;
  saveToLocalStorage();
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
  // var item = $(this).getFromLocalStorage ()
  // var item = $(this).closest('.card').data();
  var index = $(this).closest('.cart-item-wrapper').index();
  removeItem(index);
  updateCart();
});


// update the cart as soon as the page loads!
updateCart();