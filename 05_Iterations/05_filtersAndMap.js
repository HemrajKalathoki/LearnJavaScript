// Map

// const coding = ['JavaScript', 'Python', 'C++', 'Java'];

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
    
// });

// console.log(values);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNumbers.filter( (num) => num > 4);
// console.log(newNumbers); // [5, 6, 7, 8, 9, 10]

// const newNums = [];

// myNumbers.forEach( (nums) => {
//     if(nums > 4 && nums < 8){
//         newNums.push(nums);
//     }
// });

// console.log(newNums); // [5, 6, 7]


const books = [
    { title: "Book One", genre: "Fiction", publish: 1990, edition: 1992 },
    { title: "Book Two", genre: "Fiction", publish: 1995, edition: 1996 },
    { title: "Book Three", genre: "Non-Fiction", publish: 2000, edition: 2001 },
    { title: "Book Four", genre: "Fiction", publish: 2005, edition: 2006 },
    { title: "Book Five", genre: "Non-Fiction", publish: 2010, edition: 2011 },
    { title: "Book Six", genre: "Fiction", publish: 2015, edition: 2016 }
        
];

let userBooks = books.filter( (book) => {
    // return book.genre === "Fiction";
});

// console.log(userBooks); 

userBooks = books.filter( (book) => book.publish >= 2000 && book.edition > 2005);

console.log(userBooks); // [ { title: 'Book Five', genre: 'Non-Fiction', publish: 2010, edition: 2011 } ]


