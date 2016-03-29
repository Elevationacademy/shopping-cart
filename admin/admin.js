var products = [
{name:'glass',price:68,url:'http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg'},
{name:'pencils',price:3,url:'http://ecx.images-amazon.com/images/I/51YFEe%2BCYbL.jpg'}
];

var _validate = function(product){
  var name = true;
  var price = true;
  var url = true;
  console.log(product.name)
  if(product.name === ''){
    name = false;
  }
  if(product.price === ''){
    price = false;
  }
  if(product.url === ''){
    url = false;
  }
  if(!name && !price && !url){
      $('#name-error').text('You have to enter a name, a price and a url for a photo');
      $('#name-error').toggleClass('showa');
      return false;
  }else if(!name && !price){
    $('#name-error').text('You have to enter a name and a price');
    $('#name-error').toggleClass('showa');
    return false;
  }else if(!price && !url){
    $('#name-error').text('You have to enter a price and a url for a photo');
    $('#name-error').toggleClass('showa');
    return false;
  }else if(!name && !url){
    $('#name-error').text('You have to enter a name and a url for a photo');
    $('#name-error').toggleClass('showa');
    return false;
  }else if(!name){
    $('#name-error').text('You have to enter a name');
    $('#name-error').toggleClass('showa');
    return false;
  }else if(!price){
    $('#name-error').text('You have to enter a price');
    $('#name-error').toggleClass('showa');
    return false;
  }else if(!url){
    $('#name-error').text('You have to enter a url for a photo');
    $('#name-error').toggleClass('showa');
    return false;
  }
  return true;
}

var addProduct = function (product) {
  var l = products.length;
  if(_validate(product)){
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
  return false;
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
  $('#cardContainer').empty();
  listProducts();
}

$('.submit-product').on('click', function(e) {
  e.preventDefault();
  //getting information from the form
  var name = $(this).parent().find('#product-name').val();
  var price = $(this).parent().find('#product-price').val();
  var url = $(this).parent().find('#product-img').val();
  var prod = {name:name,price:price,url:url};
  // console.log($('.showa'));
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
  showProduct($(this));
});

$('#cardContainer').on('click', '.deletebox', function () {
  removeProduct($(this).data().id);
});

$('.create-title').on('click',function(){
  $('.item-form').toggleClass('show');
});

$('.search-title').on('click',function(){
  $('.search-form').toggleClass('show');
});
