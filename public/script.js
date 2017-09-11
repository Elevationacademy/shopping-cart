// an array with all of our cart items
var cart = [];

var updateCart = function() {

    $('.cart-list').empty();

    var source = $('#cart_items').html();
    var template = Handlebars.compile(source)
    var total = 0;
    for (i = 0; i < cart.length; i++) {

        var newHTML = template(cart[i]);
        $('.cart-list').append(newHTML);
        total += cart[i].price;
    }

    $('.total').html(total)

}


var addItem = function(item) {
    cart.push(item)
    updateCart();
}

var clearCart = function() {
    cart = [];
    updateCart();
}

$('.view-cart').on('click', function() {

    $(".shopping-cart").toggleClass('hidden');

})




$('.add-to-cart').on('click', function() {
    var item = $(this).closest(".card").data();

    //     var itemsName = $(this).closest(".card").attr("data-name");
    //     var itemsPrice = $(this).closest(".card").attr("data-price");
    //     var item = {
    //         $itemName: itemsName,
    //         $itemsPrice: itemsPrice
    // }

    addItem(item);
});

$('.clear-cart').on('click', function() {
    clearCart();
});

// update the cart as soon as the page loads!
updateCart();