// adding para 
// const t1 = performance.now();
// for (i = 0; i<=100; i++);{
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this took " + (t2-t1) + "ms");

// // optimising 
// const t3= performance.now();
// let myDiv = document.createElement('div');

// for (let i=1; i<=100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'this is para' + i;

//     myDiv.appendChild(element);

// }

// document.body.appendChild(myDiv);

// const t4 = performance.now();
// console.log("this took " + (t4-t3) + "ms");



// using fragment 

// let fragment = document.createDocumentFragment();

// for (i = 0; i<=100; i++);{
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i;

//     fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment); // single 1 reflow nad 1 repaint //


// single threading language 

function addPara() {
    let Para = document.createElement('p');
    Para.textContent = 'js is single';
    document.body.appendChild(Para);
}

function appendNewMessage(){
    let Para = document.createElement('p');
    Para.textContent = 'kya hal chal';
    document.body.appendChild(para);
}


addPara();
appendNewMessage();