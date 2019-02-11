const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
function printGrocery(element){
  console.log('I want to eat a ' + element);
}

fruits.forEach(printGrocery);
/* 
forEach() loops through the array and executes 
the callback function for each element
*/