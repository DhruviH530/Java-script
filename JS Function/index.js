// console.log('kyaa hal');

// if run ahiya first ma lakhisu to pan execute thase km k hoisting thay che'

// what is hoisting -- js engine pehla function top ma jase and 
//  badha execute krine  pachi aave aetle and aa autometically thay 

// function declaration

function run() {
    console.log('running ');
}

// // function call invoke 

run();


// // function assignment 

let stand = function walk (){
    console.log('walking ');
}


stand();


// // arguments in function 

function sum (a,b){
    console.log (arguments);
    return a+b;

}

let ans = sum (1,2,3,4,5);


// REST Operetor //


// function sum(...args) {
// 	console.log(args);
// }

// sum(1,2,3,4,5);



// getter setter 

// getter -> access the property
//  setter -> chnage or mutate the property 



let person ={
	fName :'dhruvi',
	lName :'desai'
};

function fullName (){
	return `${person.fName} ${person.lName}`;
}

console.log(fullName());


// scope // ****

   // print thase km k b;ock ni ander che 
// {
//     let a = 5;
 
//     console.log(a);
// }

// block ni bhar lakhisu to print nai thay 

// function ma define kro to 

// function walk (){
//     var a = 5;
// }

// console.log (a);

// aa case ma print thase nai km k function ma variable 
// define che aetle 

// for loop ma let thi try krite 

for (let i = 0; i<0; i++ ){

}

console.log(i);

// ama ans. aavse  nai km k define nai 

// var thi krisu to 

for (var i = 0; i<0; i++ ){

}

console.log(i);
// to thase print


// reducing array 

let arr =[1,2,3,4];
let total = 0;

for (let value of arr)
    total = total + value;

console.log(total);


arr.reduce((accumulater , currentValue )