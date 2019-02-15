const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
// Write your code below


while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// A while loop is the best loop to use when you want to execute a code an undetermined number of times.


