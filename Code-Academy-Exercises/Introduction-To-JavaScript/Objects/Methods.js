let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat () { 
    console.log(retreatMessage)
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};
/*
we can include methods in our object literals by 
creating ordinary, comma-seperated key value pairs. The key would be our method name, while the value would be the function
*/
alienShip.retreat();
alienShip.takeOff();