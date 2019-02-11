const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
/*
.findIndex() will return the index of the first element that evaluates to true in the callback function
*/
const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
  
});
console.log(startsWithS);
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
