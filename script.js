
//local storage module
var Storage = function(){
  var cart = [];
  var products = [];

  var get = function(key){
    var info = JSON.parse(localStorage.getItem(key));
    return info
  }

  var setCart = function(){
    localStorage.setItem('cart',JSON.stringify(this.cart));
  }

  var setProducts = function(){
    localStorage.setItem('products',JSON.stringify(this.products));
  }

  cart = get('cart');
  products = get('products');

  return {
    get: get,
    setCart: setCart,
    setProducts: setProducts,
    cart: cart,
    products: products
  }
}

//update the cart display
var updateCart = function() {
  //templates
  var source1 = $('#cart-item-1').html();
  var template1 = Handlebars.compile(source1);
  var source2 = $('#cart-item-2').html();
  var template2 = Handlebars.compile(source2);
  $('.cart-list').empty();
  //loop through the cart array and display the items with the correct template
  for(i = 0; i < storage.cart.length; i++){
  	if(storage.cart[i].amount > 1){
  		var newHtml = template2(storage.cart[i]);
  	}else{
  		var newHtml = template1(storage.cart[i]);
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
	for(i = 0; i < storage.cart.length; i++){
		var toAdd = storage.cart[i].price * storage.cart[i].amount;
		total += toAdd;
	}
	return total;
}
//add item to the cart array and display
var addItem = function(item) {
  var l = storage.cart.length;
  for(i = 0; i < l; i++){
  	if(storage.cart[i].name === item.name) {
  		storage.cart[i].amount++
      updateCart();
      return;
  	}
  }
  storage.cart.push(item);
  storage.setCart();
  updateCart();
}
//remove item from the cart array and display
var removeItem = function(index) {
	storage.cart.splice(index,1);
  storage.setCart();
	updateCart();
}
//clear the cart array and display
var clearCart = function () {
  storage.cart = [];
  storage.setCart();
  updateCart();
}
//update the producta display with the current items in the products array
var updateProducts = function() {
  var source = $('#item-card').html();
  var template = Handlebars.compile(source);
  $('.row').empty();
  for(i = 0; i < storage.products.length; i++){
    var newHtml = template(storage.products[i]);
    $('.row').append(newHtml);
  }
}
//remove product from the producta array
var removeProduct = function(product){
  var index  = product.index();
  storage.products.splice(index,1);
  storage.setProducts();
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

var storage = Storage();
// an array with all products, added 2 for tests.
// storage.products = [
// {name:'glass',price:68,url:'http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg'},
// {name:'pencils',price:3,url:'http://ecx.images-amazon.com/images/I/51YFEe%2BCYbL.jpg'}
// ];
// storage.cart = [];
// storage.setCart()
// storage.setProducts();
//run update functions at the loading of the page
updateCart();
updateProducts();