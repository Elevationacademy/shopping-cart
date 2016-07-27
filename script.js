// an array with all of our cart items
var STORAGE_ID = 'shopping-cart';
var getFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
}
var cart = getFromLocalStorage();
var total = 0;

var saveToLocalStorage = function () {
    localStorage.setItem(STORAGE_ID, JSON.stringify(cart));
}

var updateCart = function () {
  $(".cart-list").empty();

  for (var i = 0; i < cart.length; i++) {

 	 	var source = $("#item-template").html();

    
        var template = Handlebars.compile(source);


        var newHTML = template(cart[i]);


        $(".cart-list").append(newHTML);
  }
};


var addItem = function (item, price) {
  var newItem = {
  	name: item,
  	price: price
  }
  cart.push(newItem);
  saveToLocalStorage(); 
  total += newItem.price;
  $(".total").text(total);
};


var clearCart = function () {
  $(".cart-list").empty();
  $(".total").empty();
}

$('.view-cart').on('click', function () {

  $(".shopping-cart").toggleClass("show");
});

$('.add-to-cart').on('click', function (item, price) {
  // TODO: get the "item" object from the page
  var item = $(this).parents('div[class^="card item"]').data("name");
  var price = $(this).closest('.card').data("price");
  addItem(item, price);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();

