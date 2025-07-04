//     // aysnc 

//     // async function getData(){
//     //         setTimeout(function(){
//     //             console.log("i am inside ")
//     //         },3000);
//     // }

//     // let output = getData();

// // await 

// // fetch api 

// // async function always return Promise

// get 

    // async function getData() {
    //      let response =    fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    //             let data =  (await response).json();
    //      console.log(data);
    // }

    // getData();

    // post 

    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

    const options = {
            
  method: "POST",
  body: JSON.stringify({ username: "dhruvi" }),
  headers: myHeaders

    };

    async function getData() {
        const url = "https://jsonplaceholder.typicode.com/posts/101";
        const response = await fetch(url );
            let data = await response.json();
            console.log("get data response : " ,  data);
    }

 async  function postData(){
            const response = await fetch(url , options);
            let data = await response.json();
            console.log("post data response : " ,  data); 
    }

    async function processData() {
            await    getData();
          await  postData();
    }

   processData();


   