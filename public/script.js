// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
   // clearCart();
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
        totalAmount += cart[i].price;
        $cartList.append(newHtml);
    }
    $total.text(totalAmount);
}

var addItem = function (item) {
  cart.push(item);
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

// update the cart as soon as the page loads!
updateCart();
