const newNumbers = [1, 3, 5, 7];

const newSum  = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10)

console.log(newSum)


/*
The .reduce() method returns a single value after 
iterating through the elements of an array, thereby 
reducing the array by using two parameters the 
accumalator and currentValue. they just keep 
addding up until the array is added up.
*/