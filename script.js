// an array with all of our cart items
var cart = [];
var total = 0;

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
  console.log(newItem.name);
  console.log(newItem.price);
  cart.push(newItem);
};

var calcTotal = function() {
	$(".total").empty();
	for (var j = 0; j<cart.length; j++) {
		total += cart[j].price;
		var source = $("#item-template").html();

    
        var template = Handlebars.compile(source);


        var newHTML = template(cart[j].price);


        $(".total").append(newHTML);
	}
}

var clearCart = function () {
  // TODO: finish
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
  calcTotal(); 
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();

