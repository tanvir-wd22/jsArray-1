// problem 01
let fruits = ['orange', 'apple', 'banana', 'mango', 'jackfruit'];   
console.log(fruits[3]);
fruits[2] = 'jambura';
console.log(fruits);


// problem 02
let destinations = ['sundarban', 'bandarban', 'modhubon'];
console.log(destinations);
destinations.push('salban');
console.log(destinations);
destinations.push('nilsagor', 'sukhsagor');
console.log(destinations);
destinations.pop();
console.log(destinations);


// problem 03
let books = ['bangla', 'english', 'ict', 'math'];
console.log(books);
let print = books.includes('javascript');
console.log(print);
console.log('js book is not here');

// problem 04
let bikes = ['yamaha', 'suzuki'];
let students = [22, 44, 46];
let rolls = [];
let results = [true, false, true]
let player = 'shakib';
let score = 100;

console.log(Array.isArray(bikes));
console.log(Array.isArray(students));
console.log(Array.isArray(rolls));
console.log(Array.isArray(results));
console.log(Array.isArray(player));
console.log(Array.isArray(score));

// problem 05
let frontEnd = ['html', 'css', 'js'];
console.log(frontEnd);
let backEnd = ['database', 'server'];
console.log(backEnd);
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

