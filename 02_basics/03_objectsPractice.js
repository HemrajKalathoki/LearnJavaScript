// Objects

const sign = Symbol("key");;

const newUser = {
    name: "Hemraj Kalathoki",
    age: 21,
    address: "Ghorahi Dang",
    education: {
        intermediate: "Mukti Sec.",
        bachelor: "AMC"
    },
    marks: [55, 58, 50, 52, 59],
    [sign]: "kalathoki", // In this way we can use symbol as key in object
    // [Symbol("sign")]: "kalathoki" // In this way we can use symbol as key in object

};

// console.log(newUser); // { name: 'Hemraj Kalathoki', age: 21, address: 'Ghorahi Dang', education: { intermediate: 'Mukti Sec.', bachelor: 'AMC' }, marks: [ 55, 58, 50, 52, 59 ], [Symbol(sign)]: 'kalathoki' }
// console.log(newUser.age); // 21
// console.log(newUser.marks[2]);  // 50
// console.log(newUser.education.bachelor); // AMC
// console.log(newUser[sign]); // kalathoki  // Accessing symbol property using variable


newUser.name = "Kalathoki"; // Updating name property
// console.log(newUser.name); // Kalathoki

// Object.freeze(newUser); // Freezes the object, preventing any changes to it
newUser.name = "Hemraj"; // Attempt to change name property after freeze     
// console.log(newUser.name); // Kalathoki (remains unchanged)

newUser.work = function(){
    console.log("Working as Software Engineer");
}

// console.log(newUser.work()); // Working as Software Engineer

newUser.greeting = function(){
    console.log(`Hello, my name is: ${this.name}`); // Using 'this' to refer to the object itself
}
// console.log(newUser.greeting()); // Hello, my name is Kalathoki



// objects 2 practice

// console.log(newUser["education"]["bachelor"]); // { intermediate: 'Mukti Sec.', bachelor: 'AMC' }

// console.log(newUser.educations?.bachelor,"No education found"); // AMC
// this is called optional chaining, it will not throw an error if the property does not exist, instead it will return undefined or null


// concating two objects

const obj1 = {
    name: "Hemraj",
    age: 21
};
const obj2 = {
    address: "Ghorahi Dang",
    education: "Mukti Sec."
};

const obj3 = { obj1, obj2 }; // Concatenating two objects using object literal syntax
// console.log(obj3); // { obj1: { name: 'Hemraj', age: 21 }, obj2: { address: 'Ghorahi Dang', education: 'Mukti Sec.' } }

const obj4 = Object.assign({}, obj1, obj2); // Concatenating two objects using Object.assign()
// console.log(obj4); // { name: 'Hemraj', age: 21, address: 'Ghorahi Dang', education: 'Mukti Sec.' }

const obj5 = { ...obj1, ...obj2 }; // Concatenating two objects using spread operator
// console.log(obj5); // { name: 'Hemraj', age: 21, address: 'Ghorahi Dang', education: 'Mukti Sec.' }


const originalObject = {
    name: "Hemraj",
    details: {
        age: 21,
        address: "Ghorahi Dang"
    }
};

const shallowCopy = {...originalObject}; // Shallow copy using spread operator
shallowCopy.details.age = 30; // changint the name of shallow copy object but it will also change the name of original object also.

// console.log(shallowCopy); // { name: 'Hemraj', age: 21, address: 'Ghorahi Dang' }
// console.log(originalObject);

const deepCopy = JSON.parse(JSON.stringify(originalObject)); // Deep copy using JSON methods
deepCopy.details.age = 25; // changing the age of deep copy object but it will not change the age of original object.

// console.log(deepCopy); // { name: 'Hemraj', age: 25, address: 'Ghorahi Dang' }
// console.log(originalObject); // { name: 'Hemraj', age: 21, address: 'Ghorahi Dang' } // original object remains unchanged

console.log(Object.keys(originalObject)); // ['name', 'details'] (keys of the object)
console.log(Object.values(shallowCopy)); // ['Hemraj', { age: 21, address: 'Ghorahi Dang' }] (values of the object)

console.log(Object.entries(originalObject.details)); // [['name', 'Hemraj'], ['details', { age: 21, address: 'Ghorahi Dang' }]] (key-value pairs of the object)



const userDetails = [
    { name: "user1", age: 21 },
    { name: "user2", age: 22 },
    { name: "Sharma", age: 23 }
];

console.log(userDetails[0].name); // Hemraj