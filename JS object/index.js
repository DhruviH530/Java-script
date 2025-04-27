console.log('chaliy shuru krte hai');

// object create

let rectangle ={
    length: 1,
    breadth: 2,

    draw: function(){
        console.log('drawing rectangle');
    }
};


// factory function //

// function createRectangle (len ,bre){

    return rectangle ={
        length: len,
        breadth: bre,
    
        draw () {
            console.log('drawing rectangle');
        }
    };

}
    
let rectangleObj1 = createRectangle(5,4);


// constructor function ///

//  pascale notation //

// function Rectangle () {

    this.length =1;
    this.breadth = 2;
    this.draw= function() {
        comsole.log('drawing');
    } 
}

// object creation using constructor function //

// let rectangleObj = new Rectangle();



// dynamic nature of objects //


function Rectangle () {

    this.length =1;
    this.breadth = 2;
    this.draw= function() {
        comsole.log('drawing');
    } 
}

// let rectangleObj = new Rectangle();

// rectangleObj.color = 'yellow';
// console.log(rectangleObj);

// delete rectangleObj.color;
// console.log(rectangleObj);


// ///////////////////////////////////////////////////////

/// pass value in primetive

let a = 10;

function inc(a) {
        a++;
}
inc(a);


// console.log(a);

// //////////////////////

// let a = {value:10};


//  function inc(a) {
//     a.value++;
//  }

// inc(a);

// console.log(a.value); 

// for in loop ///

let rectangle = {
    length:2,
    breadth:4
};

// for in

    for (let key in rectangle){
        console.log(key,rectangle[key]);
    }