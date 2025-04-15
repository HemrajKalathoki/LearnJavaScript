//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Hemraj Kalathoki",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Stack (Primitive), Heap (Non primitive) 

// Primitive : Stored in stack, immutable, copied by value 
// Reference : Stored in heap, mutable, copied by reference
// Immutable : Cannot be changed    
// Mutable : Can be changed 
// Copied by value : When we copy the value, it creates a new copy of the value in the stack.   
// Copied by reference : When we copy the value, it creates a reference to the original value in the heap.
//  Reference type is mutable, but the reference is immutable.