var products = [
  {
    name: "Garnasha and Manchango",
    description: "awesome wine and cheese",
    price: "$100",
    URL: '<img src="images/garnasha-manchango'
  }, 
  {
    name: "Pinot Noir and Gruyere", 
    description: "awesome wine and cheese",
    price: "$100",
    URL: '<img src="images/pinotnoir-gruyere'
  }, 
  {
    name: "Prosecco and Asiago", 
    description: "awesome wine and cheese",
    price: "$100",
    URL: '<img src="images/prosecco-asiago'
  },
  {
    name: "Riesling and Fondue", 
    description: "awesome wine and cheese",
    price: "$100",
    URL: '<img src="images/riesling-fondue'
  }, 
  {
    name: "Sauvignon Blanc and Goat Cheese", 
    description: "awesome wine and cheese",
    price: "$100",
    URL: '<img src="images/sauvignonblanc-goatcheese'
  }, 
  {
    name: "Shiraz and Smoked Gouda", 
    description: "awesome wine and cheese",
    price: "$100",
    URL: '<img src="images/shiraz-smokedgouda'
  }
]



var productDetails = document.getElementById("product-container");

  for (var i = 0; i < products.length; i++) {
    var ProductName = products[i].name;
    var ProductDescription = products[i].description;
    var ProductPrice = products[i].price;
    var ProductURL = products[i].URL;

    productDetails.innerHTML += "<div class='product-name'>" + ProductName + "</div>"
+ "<div class='product-image'>" + ProductURL + "</div>" + "<div class='product-description'>" + ProductDescription + "</div>" + "<div class='product-price'>" + ProductPrice + "</div>" + "<button class='buy'>" + "Buy Now!" + "</button>"


 }; 



















