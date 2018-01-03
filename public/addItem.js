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


function createNewItemByTemplate(newItem) {
    var source = $('#list-item').html();
    var template = Handlebars.compile(source);
    var listingItem = template((newItem));
    return listingItem;
}

function newListingObj(price, name, imageLink) {
    var newItem = {'price': price, 'name': name, 'image-link': imageLink};
    return newItem;
}

function renderList() {
    var $newListings = $('.new-listings');
    $newListings.empty();
    for (i=0; i<newListings.length;i++) {
        var listingItem = createNewItemByTemplate(newListings[i]);
        $newListings.append(listingItem);
    }
}

function onAddNewListingClick() {
    var price = $('.new-item-price').val();
    var name = $('.new-item-name').val();
    var imageLink = $('.new-item-image-link').val();

    var newItem = newListingObj(price, name, imageLink);

    newListings.push(newItem);

    renderList();

    closeModal();

}

$('.add-new-item-listing').click(function(){
    onAddNewListingClick();
});