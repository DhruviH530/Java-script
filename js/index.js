


// ex

class animal {
    constructor(name , legCount ,speaks){
      this.name = name;
      this.legCount = legCount;
      this.speaks = speaks;
    }

    speak(){
      console.log("hi there " + this.speaks);
    }
}


let dog = new animal ("dog" , 4 , "bhao bhao");
let cat = new animal ("cat" , 4 , "mewo");
cat.speak();


// Date 

const currentDate = new Date();

console.log(currentDate.getDate());
console.log(currentDate.getMonth()+1);
console.log(currentDate.getFullYear());



// milisec

// const currentDate = new Date();

console.log("time in milisecound since 1970:", currentDate.getTime());


// ex

function currentTimePrint(){
  console.log(new Date().getMinutes());
}

setTimeout(currentTimePrint, 1000);