// Write your code below

const bobsFollowers = ['arthur','dutch','john','javier'];
const tinasFollowers = ['arthur','dutch','karen'];
const mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j])
    } 
  }
}; 


/* for each element in the outer loop array, an 
loop will run  in its entirety comparing the 
current element from the outer to each element in 
the inner array. when they both match, they will 
print a string to the console.
*/
