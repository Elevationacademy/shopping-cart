var express = require('express');
var app = express();
app.listen(8000);
app.use(express.static('.'))

// var express = require('express');
// var app = express();
// app.listen(8000);
//
// var amazon = require('amazon-product-api');
// var client = amazon.createClient({
//   awsId: "AKIAIWOHZZWHKOF36ZHQ",
//   awsSecret: "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",
//   awsTag: "Elevation_Academy_Shopping_Cart_ Project"
// });
//
//
//
//
//
//
//
// app.get('/', function(request, response){
// app.use(express.static('public'))
// });
//
// app.get('/amazon', function(request, response){
//   response.send("this should get Amazon Products queries");
// client.itemSearch({
//   director: 'Quentin Tarantino',
//   actor: 'Samuel L. Jackson',
//   searchIndex: 'DVD',
//   audienceRating: 'R',
//   responseGroup: 'ItemAttributes,Offers,Images'
// }, function(err, results, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(results);  // products (Array of Object)
//     console.log(response); // response (Array where the first element is an Object that contains Request, Item, etc.)
//   }
// });
//
// });
//
//
