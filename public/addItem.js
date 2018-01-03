newListings = [];
// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
$('.new-item').off();
$('.new-item').click(function() {
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
console.log("add item");

$('.add-new-item').click(function(){
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
})