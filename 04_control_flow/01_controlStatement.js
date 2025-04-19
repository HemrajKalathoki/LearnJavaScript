// control statements

// if
const isUserLoggedIn = true;
const temperature = 45;

if(temperature < 50){
    // execution
    console.log("The temperature is less than 50");
    
}

// comparision operators : 
// <, >, <=, >=, ==, !=, ===, !==

// const score = 250;
// if(score >= 150){
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`We can't use power value cause scope ${power}`);

const balance = 1000;

// if(balance > 500) console.log("You can withdraw"), console.log("This is also in same if scope");


// if else if
// switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    default:
        console.log("Invalid number for first 4th months");
        break;
}

// truthy values example

// const userEmail = "kalathoki@gmail.com";

// if (userEmail) {
//     console.log("Got user email");
    
// } else {
//     console.log("Don't have user email");
    
// }


// falsy values : 
// flase, 0, -0, BigInt 0n, "", null, undefined, NaN



// truthy values : 
// "0", true, 'false', " ", [], {}, function(){}

// -------------

// const users = [];

// if(users.length === 0){
//     console.log("Array is empty"); // This is for checking the empty array
    
// }


const emptyObject = {};

if(Object.keys(emptyObject).length === 0){
    console.log("this is empty object"); // for checking the empty object
    
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 20;  // assign 5
console.log(val1);
val1 = null ?? 10;  // assign 10
console.log(val1);

val1 = undefined ?? 25; // assign 25

val1 = null ?? 50 ?? 30;  // assign 50



// Terniary Operator  ? :

// condition ? true ? false 

const iceTeaPrice = 200;
iceTeaPrice <= 100 ? console.log("price less than 100") : console.log("Price is greater than 100");


