const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

console.log(typeof balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // its to round the number to 4 decimal places

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 1
const max = 6

let num = Math.random() * (max - min + 1);
console.log(num);

console.log(Math.floor(num) + min)

console.log(Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);


