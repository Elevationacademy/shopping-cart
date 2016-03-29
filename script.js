// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: finish
  var source1 = $('#cart-item-1').html();
  var template1 = Handlebars.compile(source1);
  var source2 = $('#cart-item-2').html();
  var template2 = Handlebars.compile(source2);
    $('.cart-list').empty();
  for(i = 0; i < cart.length; i++){
  	if(cart[i].amount > 1){
  		var newHtml = template2(cart[i]);
  	}else{
  		var newHtml = template1(cart[i]);
  	}
  	$('.cart-list').append(newHtml);
  }
  var total = getTotal();
  $('.total').text(total);
}

var getTotal = function(){
	var total = 0;
	for(i = 0; i < cart.length; i++){
		var toAdd = cart[i].price * cart[i].amount;
		total += toAdd;
	}
	return total;
}

var addItem = function (item) {
  // TODO: finish
  var count = 0;
  var l = cart.length;
  for(i = 0; i < l; i++){
  	if(cart[i].name === item.name){
  		cart[i].amount++
  	}else{
  		count++
  	}
  }
  if(count === l){
  	cart.push(item);
  }
  updateCart();
  
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
  item = {name:name,price:price,amount:1};
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