// combining //////////////

let first = [1,2,3];

let second = [4,5,6];

let combined = first.concat(second);
console.log(combined);


// slicing ///////////////////

let marks = [10,20,30,40,50,60,70,80];
let sliced = marks.slice(2,6);
console.log(sliced);


// spread / combinded////////////////////////////


let first = [1,2,3];

let second = [4,5,6];

let combinde = [...first, ...second];
console.log (combinde);

// copy kese creat kru 
// let another = [...combinde];

// iterating //////////////////



let arr = [10,20,30,40,50];

// for of loop////////////

for (let value of arr) {
    console.log(value);
}

// for each loop/////////////////////////

arr.forEach(function(number){
    console.log(number);
}
);


// sorting Array/////////////////////

// let  numbers = [40,30,10,20,50];

numbers.sort();

console.log(numbers);

numbers.reverse();
console.log(numbers);


// filtering//////////////////////////////////

let numbers = [1,3,-4,-1];

let filtered = numbers.filter(function(value){
    return value >=0;
});

// console.log(filtered);

// Mapping 

let  numbers = [7,8,9,10,11];

 let items = numbers .map(function(value){
    return 'student_no' + value;
}
)

console.log(items);

// arrow function ma create kemnu thay ->//


let  numbers = [7,8,9,10,11];
console.log(numbers);

 let items = numbers .map ( value =>  'student_no' + value);



console.log(items);

