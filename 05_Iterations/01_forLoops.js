// for loop

// for(let index = 1; index <= 10; index++){
//     const element = index;
//     console.log(index);

//     if(element == 5){
//         console.log(`index is now: ${element}`);
//         break;
//     }
// }


for (let row = 1; row <= 10; row++) {
    // console.log(`Table of ${row}`);
    
    for (let column = 1; column <= 10; column++) {
        // console.log(row);
        // console.log(`${row} * ${column} = ${row * column}`);
    }
}


// For loop in an Array


const myArray = ["hemraj", "Kalathoki", "kala"];
console.log(`the Length of myArray is: ${myArray.length}`);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);   
// }

for (let index = 1; index <= 20; index++) {
    const element = index;
    console.log(element);   
    if (element == 10) {
        console.log(`index is now: ${element}`);
        break;
    }
}

for (let index = 1; index <= 20; index++) {
    const element = index;
    console.log(element);   
    if (element == 15) {
        console.log(`index is now: ${element}`);
        continue;
    }

}