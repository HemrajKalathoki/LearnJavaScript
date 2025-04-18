const addTwoNumbers = function (firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function testFunction(number, multiplier = 2) {
    return number * multiplier;
}

// console.log(addTwoNumbers(5, 10)); // 15

// console.log("Test function with default multiplier: ", testFunction(5)); // 10
// console.log("Test function with custom multiplier: ", testFunction(5, 3)); // 15


// for unknown number of arguments

function calculateCartPrice(val1, val2, ...num1) {
    let total = val1 + val2;
    for (let i = 0; i < num1.length; i++) {
        total += num1[i];
    }
    return total;
}

// passing objects in function

const user = {
    username: "Hemraj",
    price: 199
};

function printuserDetails(userObject){
    console.log(`Username is ${userObject.username} and price is ${userObject.price}`);
}

// printuserDetails(user); // Username is Hemraj and price is 199
// printuserDetails({
//     username: "Kalathoki",
//     price: 399
// }); // Username is Kalathoki and price is 399



// scopes and closures

// global scope   var
// function scope  let, const
// block scope  let, const
// lexical scope  let, const


// closure is a function that has access to its own scope, the scope of the outer function, and the global scope.
// closures are created every time a function is created
// closures are used to create private variables and functions

function outerFunction() {
    let outerVariable = "I am an outer variable";

    function innerFunction() {
        console.log(outerVariable); // Accessing outer variable
    }

    return innerFunction(); // Returning inner function
}

// outerFunction(); // I am an outer variable

if(true){
    const username = "Kalathoki";
    if(username === "Kalathoki"){
        const firstname = "Hemraj";
        // console.log(`Hello ${username}`);
        // console.log(`Hello ${firstname} ${username}`);
    }
}



// Arrow functions
// Arrow functions are a shorter syntax for writing function expressions
// Arrow functions do not have their own this, arguments, or super
// Arrow functions cannot be used as constructors
// Arrow functions do not have the prototype property
// Arrow functions are always anonymous
// Arrow functions are not hoisted
// Arrow functions cannot be used as methods

const users = {
    username: "Hemraj",
    age: 21,

    greet: function(){
        // console.log(`Hello ${this.username} राधे राधे`);
        console.log(this);
        
    }
}

// users.greet();

const welcomeMessage = function(){
    console.log("Hello this is welcome message");
    console.log(this);
};

// welcomeMessage();


const userDetails = () => {
    console.log("Hello this is user details");
    console.log(this);
    
}

// userDetails();

// implicit return in arrow function

const addTwoNumbersArrow = (firstNumber, secondNumber) => firstNumber + secondNumber;

// console.log(addTwoNumbersArrow(5, 10)); // 15

const multiplyTwo = (num1, num2) => (num1 * num2); // implicit return when using parentheses we don't need to use return keyword but we should use return keyword when using curly braces
// console.log(multiplyTwo(5, 10)); // 50

const multiplyTwoWithCurlyBraces = (num1, num2) => ({username : "Hemraj"}); // we should use parenthesis while returning object literal otherwise it will be treated as a block statement


// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that is executed immediately after it is defined
// IIFE is used to create a private scope and avoid polluting the global scope
// IIFE is used to create a module pattern

(function connection(){  // named IIFE 
    console.log("Hello this is IIFE function");
    console.log("DB Connected");
    
})();

(() => {  // simple IIFE 
    console.log("Hello this is IIFE function");   
})();