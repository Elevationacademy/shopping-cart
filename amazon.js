
var amazon = require('amazon-product-api');
var client = amazon.createClient({
  awsId: "AKIAIWOHZZWHKOF36ZHQ",
  awsSecret: "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",
  awsTag: "Elevation_Academy_Shopping_Cart_ Project"
});



client.itemSearch({
  director: 'Quentin Tarantino',
//  actor: 'Samuel L. Jackson',
//  searchIndex: 'DVD',
//  audienceRating: 'R',
  responseGroup: 'ItemAttributes,Offers,Images'
}, function(err, results, response) {
  if (err) {
    console.log('Server made a boo boo ...')
    console.log(err);
  } else {
    console.log('Success :) ');
    console.log(results);  // products (Array of Object)
    console.log(response); // response (Array where the first element is an Object that contains Request, Item, etc.)
  }
});
