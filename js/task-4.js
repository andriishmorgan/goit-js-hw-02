function getShippingCost(country) {
    let price;
    let message;

  switch (country.toLowerCase()) {
    case 'china':
      price = 100;
      break;
    case 'chile':
      price = 250;
      break;
    case 'australia':
      price = 170;
      break;
    case 'jamaica':
      price = 120;
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }

  if (price) {
    message = `Shipping to ${country} will cost ${price} credits`;
    }
    
  return message;
}
console.log(getShippingCost("Australia"));
console.log(getShippingCost("Sweden"));