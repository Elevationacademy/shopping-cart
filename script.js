// an array with all of our cart items
var cart = [];
// an array with all products, added 2 for tests. !need to impelement push and pull from local storage or remote database!
var products = [
{name:'glass',price:68,url:'http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg'},
{name:'pencils',price:3,url:'http://ecx.images-amazon.com/images/I/51YFEe%2BCYbL.jpg'}
];

//update the cart display
var updateCart = function() {
  //templates
  var source1 = $('#cart-item-1').html();
  var template1 = Handlebars.compile(source1);
  var source2 = $('#cart-item-2').html();
  var template2 = Handlebars.compile(source2);
  $('.cart-list').empty();
  //loop through the cart array and display the items with the correct template
  for(i = 0; i < cart.length; i++){
  	if(cart[i].amount > 1){
  		var newHtml = template2(cart[i]);
  	}else{
  		var newHtml = template1(cart[i]);
  	}
  	$('.cart-list').append(newHtml);
  }
  //update the cart total display
  var total = _getTotal();
  $('.total').text(total);
}

//helper method to get the total value of the items in the cart array
var _getTotal = function(){
	var total = 0;
	for(i = 0; i < cart.length; i++){
		var toAdd = cart[i].price * cart[i].amount;
		total += toAdd;
	}
	return total;
}
//add item to the cart array and display
var addItem = function(item) {
  var l = cart.length;
  for(i = 0; i < l; i++){
  	if(cart[i].name === item.name) {
  		cart[i].amount++
      updateCart();
      return;
  	}
  }
  cart.push(item);
  updateCart();
}
//remove item from the cart array and display
var removeItem = function(index) {
	cart.splice(index,1);
	updateCart();
}
//clear the cart array and display
var clearCart = function () {
  cart = [];
  updateCart();
}
//update the producta display with the current items in the products array !need to impelement push and pull from local storage or remote database!
var updateProducts = function() {
  var source = $('#item-card').html();
  var template = Handlebars.compile(source);
  $('.row').empty();
  for(i = 0; i < products.length; i++){
    var newHtml = template(products[i]);
    $('.row').append(newHtml);
  }
}
//remove product from the producta array !need to impelement push and pull from local storage or remote database!
var removeProduct = function(product){
  var index  = product.index();
  products.splice(index,1);
  updateProducts();
}
//listener for clicks on the show cart toggle button
$('.view-cart').on('click', function() {
  $('.shopping-cart').toggleClass('show');
});
//listener for the add to cart button
$('.row').on('click', '.add-to-cart', function() {
  var name = $(this).parent().parent().data().name;
  var price = $($(this).parent()).parent().data().price;
  var item = {name:name,price:price,amount:1};
  addItem(item);
  updateCart();
});
//listener for the delete button on products
$('.row').on('click', '.deletebox', function() {
  removeProduct($(this).closest('.col-md-4'));
});
//listener for the clear cart button
$('.clear-cart').on('click', function() {
  clearCart();
});
//listener for the individual cart item removal button
$('.cart-list').on('click','.item-remove', function() {
	var index = $(this).parent().index();
	removeItem(index);
});


//run update functions at the loading of the page
updateCart();
updateProducts();