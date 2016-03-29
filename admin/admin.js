var products = [
{name:'glass',price:68,url:'http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg'},
{name:'pencils',price:3,url:'http://ecx.images-amazon.com/images/I/51YFEe%2BCYbL.jpg'}
];

var addProduct = function (product) {
  var l = products.length;

  for(i = 0; i < l; i++){
    if(products[i].name === product.name) {
      $('#name-error').text('This name is already taken');
      $('#name-error').toggleClass('showa');
      return false;
    }
  }
  products.push(product);
  return true;
}

var listProducts = function(){
  $('#listContainer').find('ul').empty();
  var l = products.length;
  for(i = 0; i < l; i++){
    $('#listContainer').find('ul').append('<li><a role="button" class="product">' + products[i].name +'</a></li>')
  }
}

var showProduct = function (current) {
  var source = $('#item-card').html();
  var template = Handlebars.compile(source);
  $('#cardContainer').empty();
  index = current.parent().index();
  var newHtml = template(products[index]);
  $('#cardContainer').append(newHtml);
  $('.deletebox').data().id = index;;
}

var removeProduct = function (index){
  products.splice(index,1);
  listProducts();
}

$('.submit-product').on('click', function() {
  //getting information from the form
  var name = $(this).parent().find('#product-name').val();
  var price = $(this).parent().find('#product-price').val();
  var url = $(this).parent().find('#product-img').val();
  var prod = {name:name,price:price,url:url};

  $('.showa').toggleClass('showa');
  var success = addProduct(prod);

  // cleaning the form
  if(success){
    $(this).parent().find('#product-name').val('');
    $(this).parent().find('#product-price').val('');
    $(this).parent().find('#product-img').val('');
  }  
});


$('.list-products').on('click', function(){
  listProducts();
});

$('#listContainer').on('click','.product',function(){
  console.log('trigger')
  showProduct($(this));
});

$('#cardContainer').on('click', '.deletebox', function () {
  removeProduct($(this).data().id);
});
