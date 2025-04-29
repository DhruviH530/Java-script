console.log('Dhruvi');


// arrays //

// 1 array creation //

let numbers = [2,3,4,5];

console.log(numbers);

// end-> push
// begin -> unshift
// middle -> splice

// seraching

console.log(numbers);

console.log(numbers.indexOf(5));


// we want to check if a number exist in a array //


// not good practice
// if(numbers.indexOf(4) != -1)
//     console.log("present");


// best practice ///

console.log(numbers.includes(7));

// true false ma ave 

// object with call back function

let courses = [
    {no:1 , naam:'prem'},
    {no:2 , naam:'harsh'},
]


// let course = courses.find(function (course) {
//     return course.naam =='prem';
// })

// console.log (course);


// REMOVING ELEMENT 

// 1 METHOD IS END //

// let  numbers = [ 1,2,3,4,5,6,7];

// numbers.pop();

// 2 Method is beging //

// numbers.shift();

//  3 Method is middle //
// index value lakhvani ae kya index pr che , pachi ketli value dleet krv i che ae value lakhvani ///
// numbers.splice(2,1);

// console.log(numbers);



// combining 

let first = [1,2,3];

let second = [4,5,6];

let combined = first.concat(second);
console.log(combined);



