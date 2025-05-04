// console.log ('dhruvi');

// synchronuns code example //

function sync (){
    console.log ('first');
}
 
sync();

console.log ('second');

// asyn code   
//  ama answer inspect krine jovoo to first second gthird aevi rite aavse 
// 
// setTimeout(function (){
//     console.log('third');
// },3000);   km k aa async che and pehla always call stack ma func tion and then 
//  call stack empty thase pachi third avse 3 m.sec raine ..



setTimeout(function (){
    console.log('third');
},3000);

function sync (){
    console.log ('first');
}
 
sync();

console.log ('second');



// promise 

let meraPromise = new Promise(function(resolve, reject)  {
    setTimeout(function () {
        console.log ('i am inside promise');
        }, 5000);
       
        // resolve mate 
        // resolve(2233);  

        // reject mate 

        reject(new Error ('are error aya '))
});

//  if you want ro do something after this you can add 
// if you want to add value in this so it will print 


    // meraPromise.then ((value) =>{console.log(value)});

// if you want to see error it will print like this 
// with this ..



    meraPromise.catch ((error) =>{console.log(error)});


console.log ('pehla'); 

                // multiple promise//


let wadaa1 = new Promise(function(resolve,reject){
    setTimeout(() =>{
        console.log ('set timeout started');
    },2000);

})

wadaa1.then(()=>{
    let wadaa2 = new Promise(function(resolve,reject){
        resolve("wadaa 2 done");
    })
    return wadaa2;
})
wadaa2.then((value) => console.log(value) );

                // async code //

   async function abcd () {
        return "dhruvi";
    }


    // aysnc function multiople with wait 

async function utility(){



    let dehliMausam = new Promise ((resolve, reject ) =>{
        setTimeout(()=>{
            resolve("dehli me grmi hai");
        },5000);
    });


    let hydMausam = new Promise ((resolve, reject ) =>{
        setTimeout(()=>{
            resolve("heydrabd is cool");
        },6000);
    });

    let DM = await dehliMausam;
    let HM = await hydMausam;

    return [DM,HM];
}

