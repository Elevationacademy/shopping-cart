var newproduct = {}

$('.add-item').on('click', function() {
  newproduct = {
    name: $(".namenew").val(),
    price: $(".pricenew").val(),
    img: $(".imgnew").val()
  }

var source = $('#new-item').html();
var template = Handlebars.compile(source);
var newHTML = template(newproduct);
$('.newly-posted').append(newHTML);
});