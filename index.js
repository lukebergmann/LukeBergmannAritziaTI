// ARRAYS
const dressArray = [
  "Product Images/Image 1.jpg",
  "Product Images/Image 2.jpg",
  "Product Images/Image 3.jpg",
  "Product Images/Image 4.jpg",
  "Product Images/Image 5.jpg",
  "Product Images/Image 6.jpg",
];
const paymentArray = [
  "Icons/Payments/Payment 1.png",
  "Icons/Payments/Payment 2.png",
  "Icons/Payments/Payment 3.png",
  "Icons/Payments/Payment 4.png",
  "Icons/Payments/Payment 5.png",
  "Icons/Payments/Payment 6.png",
];
const getHelpArray = [
  "Live Chat Now",
  "Contact Us",
  "Shipping",
  "Returns & Exchanges",
  "Pay & Security",
  "Special Orders",
  "Size Guide",
];
const myAccountArray = [
  "Track an Order",
  "Order History",
  "My Wishlist",
  "Find a Wishlist",
  "Account Settings",
  "Sign Out",
];
const aboutUsArray = [
  "Boutiques",
  "Careers",
  "Gift Cards",
  "About Aritzia",
  "Corporate Responsibility",
  "Accessibility",
  "Investor Relations",
  "Artistic License",
];
const filterDressesArray = [
  "Mini Dresses",
  "Maxi Dresses",
  "Midi Dresses",
  "Sweater Dresses",
  "Long Sleeve Dresses",
  "Bodycon Dresses",
  "Jumpsuits",
  "Wrap Dresses",
  "Fit & Flare Dresses",
  "Slit Dresses",
  "Date Night Dresses",
];
const dressInfoArray = ["Brand", "Product", "Name"];

// FUNCTIONS

// Iterate over dresses and display in html with dress info
function showDresses() {
  for (let dress of dressArray) {
    let imageDiv = document.createElement("div");
    imageDiv.className = "dressDiv";
    let dressImg = document.createElement("img");
    dressImg.className = "dress";
    dressImg.src = dress;
    let imageInfoDiv = document.createElement("div");
    imageInfoDiv.className = "imageInfoDiv";
    let brand = document.createElement("p");
    brand.className = "brand";
    brand.innerHTML = "Brand";
    let productName = document.createElement("p");
    productName.className = "productName";
    productName.innerHTML = "Product Name";
    let price = document.createElement("p");
    price.className = "price";
    price.innerHTML = "Price";
    // let image = document.createTextNode(dress);
    dressImg.append(dress);
    imageDiv.append(dressImg);
    imageDiv.append(imageInfoDiv);
    imageInfoDiv.append(brand);
    imageInfoDiv.append(productName);
    imageInfoDiv.append(price);
    document.getElementById("dressGallery").appendChild(imageDiv);
  }
}

// Iterate over payments and display in html
function showPayments() {
  for (let payment of paymentArray) {
    let paymentImg = document.createElement("img");
    paymentImg.className = "paymentMethod";
    paymentImg.src = payment;
    document.getElementById("paymentGallery").appendChild(paymentImg);
  }
}

// Iterate over Get Help section and display in html
function showGetHelp() {
  for (let help of getHelpArray) {
    let helpItem = document.createElement("li");
    helpItem.className = "helpItem";
    let helpText = document.createTextNode(help);
    helpItem.append(helpText);
    document.getElementById("getHelpSection").appendChild(helpItem);
  }
}

// Iterate over My Account section and display in html
function showMyAccount() {
  for (let account of myAccountArray) {
    let accountItem = document.createElement("li");
    accountItem.className = "accountItem";
    let accountText = document.createTextNode(account);
    accountItem.append(accountText);
    document.getElementById("myAccountSection").appendChild(accountItem);
  }
}

// Iterate over About Us section and display in html
function showAboutUs() {
  for (let about of aboutUsArray) {
    let aboutItem = document.createElement("li");
    aboutItem.className = "aboutItem";
    let aboutText = document.createTextNode(about);
    aboutItem.append(aboutText);
    document.getElementById("aboutUsSection").appendChild(aboutItem);
  }
}

// Iterate over dress filters and display in html
function showDressFilters() {
  for (let filter of filterDressesArray) {
    let dressFilter = document.createElement("li");
    dressFilter.className = "filterText";
    let filterText = document.createTextNode(filter);
    dressFilter.append(filterText);
    document.getElementById("dressFilterSection").appendChild(dressFilter);
  }
}

// CALL FUNCTIONS
showDresses();
showPayments();
showGetHelp();
showMyAccount();
showAboutUs();
showDressFilters();
