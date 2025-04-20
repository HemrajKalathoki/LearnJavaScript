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



