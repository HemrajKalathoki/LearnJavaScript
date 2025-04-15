const name = "Hemraj Kalathoki"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('Hemraj Kalathoki-hc-com')

// console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Hemraj Kalathoki    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hemrajkalathoki.com.np"

console.log(url.replace('.com', '-'))

console.log(url.includes('hemraj'))

console.log(gameName.split('-'));

let stringOne = "Hemraj Kalathoki";
console.log(stringOne.slice(0, stringOne.length-1));


let userName;
console.log(userName);
console.log(typeof userName);

let lastName = null;
console.log(lastName);
console.log(typeof lastName);

