var display = function(item){
  // function receives sn item object and renders the preview template
  var src = $('#preview-template').html();
  var template = Handlebars.compile(src);
  var newHtml = template(item);
  $('.preview').append(newHtml);
}//display
