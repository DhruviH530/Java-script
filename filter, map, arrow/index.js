

// const input = [1,2,3,4,5];


// function transform(i){
//         return i*2;
// }

//  const ans= input.map( transform);
//  console.log(ans);


// //  filter

// const arr = [1,2,3,4,5];

// const newArr =[];

// for (let i = 0; i<arr.length; i++){
//     if(arr[i]% 2 ==0 ){
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr);


// filtering 


// const arr = ["dhruvi", "prem" ,  "Harsh"];

// const ans = arr.filter(function (n){
//     if(n.startwith("H")){
//         return true;
//     }else{
//         return false;
//     }
// });


// console.log(ans);


// arrow

const arr = [1,2,3,4,5];

const ans = arr.filter( (n) => {
    if(n % 2 == 0){
        return true;
    }else{
        return false;
    }
});


console.log(ans);