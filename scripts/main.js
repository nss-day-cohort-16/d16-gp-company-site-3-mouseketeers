var products = [
  {
    name: "Garnasha and Manchango",
    description: "awesome wine and cheese",
    price: "$100",
    URL: '<img src="images/garnasha-manchango.png>',
  }, 
  {
    name: "Pinot Noir and Gruyere", 
    description: "awesome wine and cheese",
    price: "$100",
    URL: '<img src="images/pinotnoir-gruyere.png>'
  }, 
  {
    name: "Prosecco and Asiago", 
    description: "awesome wine and cheese",
    price: "$100",
    URL: '<img src="images/prosecco-asiago.png>'
  },
  {
    name: "Riesling and Fondue", 
    description: "awesome wine and cheese",
    price: "$100",
    URL: '<img src="images/riesling-fondue.png>'
  }, 
  {
    name: "Sauvignon Blanc and Goat Cheese", 
    description: "awesome wine and cheese",
    price: "$100",
    URL: '<img src="images/sauvignonblanc-goatcheese.png>'
  }, 
  {
    name: "Shiraz and Smoked Gouda", 
    description: "awesome wine and cheese",
    price: "$100",
    URL: '<img src="images/shiraz-smokedgouda.png>'
  }
]




 function buildDom() {
  var emptyString = '';
  for (i = 0; i < products.length; i++) {
    
    var ProductName = products[i].name;
    var ProductDescription = products[i].description;
    var ProductPrice = products[i].price;
    var ProductURL = products[i].URL;

    // console.log("ProductPrice", ProductPrice);
    // console.log("ProductDescription", ProductDescription);
    // console.log("ProductURL", ProductURL);

    var productDetails = document.getElementById("product-container");

    emptyString += "<div class='product'><div class='product-name'>" + ProductName + "</div><div class='product-image'>" + ProductURL + "</div><div class='product-description'>" + ProductDescription + "</div><div class='product-price'>" + ProductPrice + "</div><button class='buy'>Buy Now!</button></div>"

  console.log("productDetails.innerHTML", productDetails.innerHTML);
  };
  productDetails.innerHTML = emptyString;
} 

buildDom();







