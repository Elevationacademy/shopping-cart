var newProduct = function(){
    var source = $('#newProduct-template').html();
    var template = Handlebars.compile(source);
   
    function addProduct(){
        var product = $('.card-container');
        var container = $('.container');
        var newHTML = template({
            name: $('#modal-item').val(),
            price: $('#modal-price').val(),
            picture: $('#modal-picture').val()
        })
        if (product.length % 3 === 0) {
            container.append('<div class="row"></div>');
            $('.row').last().append(newHTML);
        } else {
            $('.row').last().append(newHTML);
        }
        $('.add-to-cart').off();
        $('.add-to-cart').on('click', function () {
            var item = $(this).closest('.item').data();
            addItem(item);
            updateCart();
        });
    }

        return {addProduct:addProduct}
}

var app = newProduct()

$('#input-submit').on('click', app.addProduct);