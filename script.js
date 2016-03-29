// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: finish
  var source = $('#cart-item').html();
  var template = Handlebars.compile(source);
    $('.cart-list').empty();
  for(i = 0; i < cart.length; i++){
  	var newHtml = template(cart[i]);
  	$('.cart-list').append(newHtml);
  }
  var total = getTotal();
  $('.total').text(total);
}

var getTotal = function(){
	var total = 0;
	for(i = 0; i < cart.length; i++){
		total += cart[i].price;
	}
	return total;
}

var addItem = function (item) {
  // TODO: finish
  cart.push(item);
}

var removeItem = function(index){
	cart.splice(index,1);
	updateCart();
}

var clearCart = function () {
  // TODO: finish
  cart = [];
  updateCart();
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  name = $(this).parent().parent().data().name;
  price = $($(this).parent()).parent().data().price;
  item = {name:name,price:price};
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

$('.cart-list').on('click','.item-remove', function() {
	var index = $(this).parent().index();
	removeItem(index);
});
// update the cart as soon as the page loads!
updateCart();