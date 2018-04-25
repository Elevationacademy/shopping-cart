// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.

  $('.cart-list').empty();
  var output = '';
  var total = 0;
  var button =
      '<button type="button" class="btn btn-danger btn-xs remove">Remove</button>';

  for (var i in cart) {
    if (cart[i].amount === 1) {
      output += '<p class="cart-item">' + cart[i].name +
        ' - $' + cart[i].price + ' ' + button + '</p>';
      total += cart[i].price;
    } else {
      output += '<p class="cart-item">' + cart[i].name +
        ' (' + cart[i].amount + ') - $' + cart[i].price + ' ' + button + '</p>';
      total += cart[i].price * cart[i].amount;
    }
  }
  $('.cart-list').append(output);
  $('.total').text(total);

};

var addItem = function (item) {
  // Write this function. Remember this function has nothing to do with display.
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  for (var i = 0; i < cart.length; i += 1) {
    if (item.name === cart[i].name) {
      cart[i].amount++;
      return;
    }
  }
  cart.push(item);
};


var clearCart = function () {
  // Write a function that clears the cart ;-)
  $('.total').text(0); // set back the total to $ 0
  cart.length = 0; // empty all the cart array
  $('.cart-list').empty(); // empty the cartlist from page
};

var removeItem = function(itemIndex) {
  for (var i = 0; i < cart.length; i += 1) {
    if (i === itemIndex) {
      cart[i].amount === 1 ? cart.splice(i, 1) : cart[i].amount--;
    }
  }
  updateCart();
};

$('.shopping-cart').on('click','.remove', function() {
  var item = $(this).closest('.cart-item');
  // remove item from cart
  removeItem(item.index());
  //update shopping cart on page
  updateCart();
});

$('.view-cart').on('click', function () {
  // hide/show the shopping cart!
  $('.shopping-cart').toggleClass('show');
});


$('.container').on('click', '.add-to-cart', function () {
  //  get the "item" object from the page
  var $clickedItem = $(this).closest('.card.item');

  console.log($clickedItem.find('.price').text());
  console.log($clickedItem.data().name);

  var item = {
    name: $clickedItem.data().name,
    price: $clickedItem.data().price,
    amount: 1
  };
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();

// when the web page is max-width 740px
$('.navbar-toggle.collapsed').on('click', function () {
  $('.view-cart').css('display', 'none');
  $('.nav.navbar-nav.navbar-right').css('display', 'none');
  $('.shopping-cart').toggleClass('show');
});
