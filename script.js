var cart = [];
var total = 0;
var cartState = {};
updateFromLocalStorage();

var updateCart = function () {

	var source = $('#cart-template').html();

	// compile our template html using handlebars
	var template = Handlebars.compile(source);

	// template can only take an object; reference in HTML with "cart"
	var newHTML = template({cart});

	// since using {{#each}}, replace the html each time
	$('.cart-list').html(newHTML);

	$('.total').html(total);
}

var addItem = function (item) {
	
	cart.push(item);
	total += item.price;

	storeToLocalStorage();

	updateCart();
}

var clearCart = function () {
  cart = [];
  total = 0;
  updateCart();
  localStorage.clear();
}

$('.view-cart').on('click', function () {
  $(".shopping-cart").toggleClass("show");
});

$('.add-to-cart').on('click', function () {

	var name = $(this).closest(".card-container").find(".item").data().name;
	var price = $(this).closest(".card-container").find(".item").data().price;

	item = {
		name: name,
		price: price
	}

	addItem(item);
	updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

function updateFromLocalStorage(){
	
	var ls = JSON.parse(localStorage.getItem("cartStatus") || '[]');
	if(ls.length != 0){
		cart = ls.updatedCart;
		total = ls.updatedTotal;
	}
}

function storeToLocalStorage(){
	
	cartState.updatedCart = cart;
	cartState.updatedTotal = total;

	localStorage.cartStatus = JSON.stringify(cartState);
}

// update the cart as soon as the page loads!
updateCart();