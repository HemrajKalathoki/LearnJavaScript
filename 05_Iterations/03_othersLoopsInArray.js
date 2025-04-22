// Array specific loops : 

// for of loop
//

// ["", "", ""];
// [{}, {}, {}];


// const arr = [1, 2, 3, 4, 5];

// for (const element of arr) {
//     console.log(element); // 1, 2, 3, 4, 5
    
// }

// for of loop in string

// const greetings = "Hello, Kalathoki!";
// for (const values of greetings) {
//     if(values === ' '){
//         console.log(`Space found`); // Space found:       
//         break;
//     }
//     console.log(`Each char is: ${values}`); // H, e, l, l, o, ,, , K, a, l, a, t, h, o, k, i, !   
// }

// Maps

// const map = new Map([
//     ["name", "John"],
//     ["age", 30],
//     ["city", "New York"]
// ]);


const map = new Map();
map.set("name", "Kalathoki");
map.set("name", "Kalathoki");
map.set("age", 21);

// console.log(map);  // print once cause duplicate values are not repeated in map

// for (const [key, value] of map) {
//     // console.log(key, ': ', value);
    
// }

// const myObject = {
//     game1: "Temple Run",
//     game2: "FreeFire"
// };

// for (const [key, value] of myObject) {
//     console.log(key, ":- ", value);  // Object is not iterable by for of loop
// }



// for in loop for iterating over objects

const programmingLanguages = {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby",
    java: "Java",
    cpp: "C++",
    swift: "Swift"
};

for (const key in programmingLanguages) {
    // if (Object.prototype.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
    // console.log(key);
    // console.log(programmingLanguages[key]); // js, py, rb, java, cpp, swift

    // console.log(`${key} : ${programmingLanguages[key]}`); // js : JavaScript, py : Python, rb : Ruby, java : Java, cpp : C++, swift : Swift
    
}

const programming = ["JavaScript", "Python", "Ruby", "Java", "C++", "Swift"];

for (const key in programming) {
    // console.log(key); // 0, 1, 2, 3, 4, 5
    // console.log(programming[key]); // JavaScript, Python, Ruby, Java, C++, Swift
}

// const countryMap = new Map();
// countryMap.set("Nepal", "Kathmandu");
// countryMap.set("India", "New Delhi");   
// countryMap.set("USA", "Washington, D.C.");
// countryMap.set("China", "Beijing");

// for (const key in countryMap) {  // we can't use forin loop for map
//     // console.log(key); 
//     // console.log(countryMap[key]); // undefined
//     // console.log(countryMap.get(key)); // Kathmandu, New Delhi, Washington, D.C., Beijing
// }


// objects -> for in loop
// Arrays -> for of loop
// Maps -> for of loop
// Sets -> for of loop
// Strings -> for of loop

// for in loop -> objects, arrays, maps, sets, strings

