var faker = require("faker");
console.log("========================");
console.log("   WELCOME TO MY SHOP!  ");
console.log("========================");


for(var i = 0; i < 10; i++)
{
	var randomProdName = String(faker.commerce.productName());
	var randomProdPrice = String(faker.commerce.price());
	console.log(randomProdName + " - $" + randomProdPrice);
}