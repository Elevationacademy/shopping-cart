var item = {};
$("#preview").on("click", function(){
item = {name:$("#pname").val(),price:$("#pprice").val(),image:$("#ppic").val()};
console.log(item);
item.push(products);
});
$("#ppic").keyup(function(){
//console.log(item);
//display(item);
});
