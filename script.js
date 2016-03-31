// an array with all of our cart items


var cart = [];
// saveToLocalStorage();


var updateCart = function () {
  // TODO: finish
  $('.cart-list').find('div').remove();

  for (var i = 0; i < cart.length; i++) {
    var carro = cart[i];
    console.log(carro);
  }
  var source = $('#result-template').html();

  var template = Handlebars.compile(source);

  var newHTML = template({cart});

  $('.cart-list').append(newHTML);

  $(".total").html(total);


  total();
}

// var handlebarIt = function (item) {
  
//     var source = $('#result-template').html();

//     var template = Handlebars.compile(source);

//     var newHTML = template(item);

//     $('.cart-list').append(newHTML);

// };
var total = function() {
  var totalNum = 0;
  for (var i = 0; i < cart.length; i++) {
    totalNum += cart[i].price 
    // console.log(total);
  };
  console.log(totalNum);
  return totalNum;
}




var addItem = function (item) {
    cart.push(item);
    // handlebarIt(item);
}


var clearCart = function () {
  // TODO: finish
  $('.cart-list').empty();
  cart =[];
  $('.total').empty();
    $(".total").html(total);

}

var STORAGE_ID = 'shopping-cart';

var saveToLocalStorage = function () {
  localStorage.setItem(STORAGE_ID, JSON.stringify(cart));
  // localStorage.setItem(STORAGE_ID, JSON.stringify(total));

}
// saveToLocalStorage();

function getFromLocalStorage() {
  var ls = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
  // if (ls != 0) {
  cart=ls

  // }

  console.log(cart);
}

  // var getFromLocalStorage = function () {
  // return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
  // }

getFromLocalStorage();

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggle();
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
        var name = $(this).closest(".card-container").find(".card").data().name; //goes up and starts going down
        var price = $(this).closest(".card-container").find(".card").data().price;

        var item = {
            name: name,
            price: price
        };
  addItem(item);
  updateCart();
  // $(".total").html(total);
  saveToLocalStorage();

});

$('.clear-cart').on('click', function () {
  clearCart();
  saveToLocalStorage();

});

// update the cart as soon as the page loads!
updateCart();