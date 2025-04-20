// While loop 

// let index = 1;

// while (condition) {
//     // syntax
// }

let index = 1;
while(index <= 5) {
    console.log(`value of index is ${index}`);
    index++;
}

let myArray = [1, 2, 3, 4, 5];
let i = 0;
while(i < myArray.length){
    console.log(myArray[i]);
    i++;
}


// do while loops

let score = 1;

do {
    console.log(`value of score is ${score}`);
    score++;    
    
} while (score <= 10);


// pattern

const n = 5; // Number of rows
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += j + ' ';
    }
    console.log(row.trim());
}
