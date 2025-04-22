// foreach loop

const coding = ["JavaScript", "Python", "Ruby", "Java", "C++", "Swift"];

// coding.forEach( (element) => {
//     console.log(element); // JavaScript, Python, Ruby, Java, C++, Swift
    
// });

function printme(item){
    console.log(item);
}

// coding.forEach(printme); // JavaScript, Python, Ruby, Java, C++, Swift


// coding.forEach( (element, index, arrList) => {
//     console.log(element, index, arrList); // JavaScript 0 [ 'JavaScript', 'Python', 'Ruby', 'Java', 'C++', 'Swift' ]
    
// })


const myCoding = [
    {
        languageName: "JavaScript",
        languageType: "Scripting",
    },
    {
        languageName: "Python",
        languageType: "Scripting",
    },
    {
        languageName: "Java",
        languageType: "Programming",
    },
    {
        languageName: "C++",
        languageType: "Programming",
    },
    {
        languageName: "Swift",
        languageType: "Programming",
    }
];

myCoding.forEach( (item) => {
    console.log(item.languageName); // JavaScript, Python, Java, C++, Swift
});