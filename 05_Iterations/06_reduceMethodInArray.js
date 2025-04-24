// reduce method in array

const myNumbers = [1, 2, 3];

// By simple function 

const sumTotal = myNumbers.reduce( function (acc, currVal){
    // console.log(`Accumulator: ${acc}, Current Value: ${currVal}`);
    return acc + currVal
}, 0);

// console.log(sumTotal); // 6

// By using arrow function

const myTotal = myNumbers.reduce( (accumulator, currentValue) => {
    // console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);

    return accumulator + currentValue;
}, 0);

// console.log(myTotal); // 6

// By using arrow function with initial value
const myTotal2 = myNumbers.reduce( (acc, currVal) => acc + currVal, 0);
// console.log(myTotal2); // 6


// shopping cart example to understand reduce method

const shoppingCart = [
    { 
        name: 'Shirt',
        price: 20, 
        quantity: 2 
    },
    { 
        name: 'Pants',
        price: 30, 
        quantity: 1 
    },
    { 
        name: 'Shoes',
        price: 50, 
        quantity: 1 
    },
    { 
        name: 'Hat',
        price: 15, 
        quantity: 3 
    }
];

const totalCartSum = shoppingCart.reduce( (acc, item) => acc + item.price ,0);

console.log(`Total Cart Sum: ${totalCartSum}`); // Total Cart Sum: 115




