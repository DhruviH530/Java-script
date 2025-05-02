// screen pr xlick kro gto btave ae event listner add krva 
// single function add kri skay 

document.addEventListener('click', function () {
            console.log('i have cliked on the document')
});

// how to remove eventlistner

function eventlistner(){
    console.log(' i have cliked onn this ');
}

document.addEventListener('click',eventlistner);

document.removeEventListener('click',eventlistner);


const content = document.querySelector('#wrapper');

content.addEventListener('click', function(event){
    console.log(event)
});




// default action 

let links = document.querySelectorAll('a');
let thirdLink =links[2];

thirdLink.addEventListener('click',function (event){
    event.preventDefault();
    console.log('maza aa gya ');
});


// how to avoid too many events 

let myDiv = document.createElement('div');

for(let i=1; i<=100; i++){
    let newElement =document.createElement('p');
    newElement.textContent='this is para'+ i;

    newElement.addEventListener('click',function(event){
        console.log('I have clicked on para');
    });
    myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);


// new example 

// let element = document.querySelector('#wrapper');

// element.addEventListener('click',function (event){
//     console.log('span pr click kia hai'+ event.target.textContent);
// });


// if perticular element pr chalavu hoy to 


let element = document.querySelector('#wrapper');

element.addEventListener('click',function (event){
    if(event.target.nodeName == 'SPAN'){
        console.log('span pr click kia hai'+ event.target.textContent);
    }
   
});
