newListings = [];
// Get the modal
var modal = $('#myModal');

// Get the <span> element that closes the modal
var span = $(".close").click(function() {
    closeModal();
})

// When the user clicks the button, open the modal
$('.new-item').click(function() {
    modal.toggle();
});

function closeModal() {
    modal.toggle();
    $('.new-item-price').val("");
    $('.new-item-name').val("");
    $('.new-item-image-link').val("");
}


$('.add-new-item-listing').click(function(){
    console.log("new item Click");
    var price = $('.new-item-price').val();
    var name = $('.new-item-name').val();
    var imageLink = $('.new-item-image-link').val();
    var source = $('#list-item').html();
    var template = Handlebars.compile(source);
    var newItem = {'price':price, 'name':name, 'image-link':imageLink};
    // newListings.push(newItem); TODO when adding render or reload maintain and update the array

    var listingItem = template((newItem));
    $('.new-listings').append(listingItem);
    closeModal();
});