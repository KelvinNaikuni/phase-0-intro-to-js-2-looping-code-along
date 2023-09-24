function writeCards(names, eventName) {
  const thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return thankYouMessages;
}
function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}

