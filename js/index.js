


// // male na name nikalvana che
 
const personArray = ["prem" ,"kirat" , "harsh" ,"dhruvi"];
const genderArray = ["male" , "male" , "male" ,"female"];




for(let i = 0; i<personArray.length; i++){
    if(genderArray[i] == "male"){
        console.log(personArray[i]);
    }
}


// // functions

function sum (a ,b){
    //  input and return is output
    return a+b ;
}

// const value = sum(1 , 2)
// console.log(value);


// call back function

function sum(num1, num2) {
let result = num1 + num2;
return result;
}

function displayResult(data) {
console.log("Result of the sum is : " + data);
return data;
}

function displayResultPassive(data) {
console.log("Sum's result is : " + data);
}

console.log(displayResult(sum(3, 5)));

function calculateArithmetic(a ,b , type){
        if(type == "sum"){
            const value = sum(a, b);
            return value;
        }

        if(type == "minus"){
            const value = sub(a , b);
            return value;

        }
}

 function sum( a, b){
    return a + b;
 }

 function sub(a,b){
    return a - b;
 }

 const value = calculateArithmetic (1,2, "minus");
 console.log(value);





//  setTimeOut

    function greet(a , b){
        console.log("hello dhruvi");
    }

    setTimeout(greet , 1 * 1000);

// setInterval

        function greet(a , b){
        console.log("hello dhruvi");
    }

    setInterval(greet , 1 * 1000);