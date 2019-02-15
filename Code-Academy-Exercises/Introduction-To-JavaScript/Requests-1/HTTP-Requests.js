
console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');
/*
setTimeout() will determine how long the program must wait before the callback can be run
*/