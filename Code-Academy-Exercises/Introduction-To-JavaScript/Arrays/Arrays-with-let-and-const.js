let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';

console.log(condiments);

condiments = ['Mayo'];

utensils[3] = 'Spoon';

console.log(utensils);

// utensils = ['Spork'];
/* 
Variables declared with the const keyword cannot 
be reassigned. but elements can still be changed 
in a const array.
*/