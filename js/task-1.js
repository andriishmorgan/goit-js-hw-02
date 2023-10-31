function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;

  if (totalPrice > customerCredits) {
      return "Insufficient funds!";
      
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}
console.log(makeTransaction(3, 1000, 15000));
