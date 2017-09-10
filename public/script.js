// an array with all of our cart items
var cart = [];

var updateCart = function() {
    var total = 0
    $(".cart-list").empty();
    for (i = 0; i < cart.length; i++) {
        $(".cart-list").append("<li>" + (i + 1) + " - " + cart[i].name + " - " + cart[i].price + "</li>");
        total += +cart[i].price;
    }
    $('.total').empty();
    $('.total').append(total);
    // TODO: Write this function. In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // Remember to empty the "cart div" before you re-add all the item elements.
}


var addItem = function(item) {
    cart.push(item);
    // TODO: Write this function. Remember this function has nothing to do with display. 
    // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
}

var clearCart = function() {
    $(".cart-list").empty();
    $('.total').html(0);
    cart = [];
    // TODO: Write a function that clears the cart ;-)
}

$('.view-cart').on('click', function() {
    // TODO: hide/show the shopping cart!
    $('.shopping-cart').toggle();
});

$('.add-to-cart').on('click', function() {
    // TODO: get the "item" object from the page
    var price = $(this).parents('.card').attr("data-price");
    var name = $(this).parents('.card').attr("data-name");
    var item = { name: name, price: price };
    addItem(item);
    updateCart();
});

$('.clear-cart').on('click', function() {
    clearCart();
});

// update the cart as soon as the page loads!
updateCart();