amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: "aws ID",
  awsSecret: "aws Secret",
  awsTag: "aws Tag"
});

client.itemSearch({
  director: 'Quentin Tarantino',
  actor: 'Samuel L. Jackson',
  searchIndex: 'DVD',
  audienceRating: 'R',
  responseGroup: 'ItemAttributes,Offers,Images'
}).then(function(results){
  console.log(results);
}).catch(function(err){
  console.log(err);
});