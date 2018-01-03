// an array with all of our cart items
var cart = [];

var updateCart = function () {

    var $cartList = $('.cart-list');
    var $total = $('.total');
    //clearing data before render back the cart array 
    $total.text(0);
    $cartList.contents().remove();
    //using handlebars templates to add items to the cart
    var source = $("#add-item-to-cart").html();
    var template = Handlebars.compile(source);
    var totalAmount = 0;
    for(var i=0;i<cart.length;i++){
        var newHtml = template(cart[i]);
        totalAmount += cart[i].price * cart[i].quantity;
        $cartList.append(newHtml);
    }
    $total.text(totalAmount);
}

var addItem = function (item) {
    var isExist = false;
    //looping to check if item already exist on the cart 
    for(var i=0;i<cart.length;i++){
        if(cart[i].name === item.name){
            isExist = true;
            cart[i].quantity++;
        }
    }
    if(!isExist){
         var cartItem = {
             name : item.name,
             price : item.price,
             quantity : 1
         };
    cart.push(cartItem);
    }
}


var removeItem = function(item){
    var index;
     for(var i=0;i<cart.length;i++){
        if(cart[i].name === item.name){
            cart[i].quantity--;
            index = i;
        }
    }
   if(cart[index].quantity === 0 ){
       cart.splice(index,1);
    }
}

var clearCart = function () {
    //removing all items from the cart 
    $('.cart-list').contents().remove();
    //reset the total amount 
    $('.total').text("0");
    //clearing data from the array the easy way []
    cart = [];
}

$('.view-cart').on('click', function () {
    $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
    //select item from the DOM
    var selectedItem =$(this).closest('.item');
    //creating item object to add it to the cart 
    var item = {};
    item.name = selectedItem.data("name");
    item.price = selectedItem.data("price");
  addItem(item);
  updateCart();
});



$('.clear-cart').on('click', function () {
  clearCart();
});

$('.shopping-cart').on('click','.remove-item',function(){
    
    var $selectedItem = $(this).closest('.new-item');
    var currentItem  = { 
        name : $selectedItem.data("name"),
        price : $selectedItem.data("price"),
        quantity: $selectedItem.data("quantity")
    };
    
    removeItem(currentItem);
    updateCart();
    
    
});

// update the cart as soon as the page loads!
updateCart();
