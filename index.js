// alert("hello");

// let name = prompt("what is your name?", "");
// alert("name");


let a = 1, b = 1;

let c = ++a; 
let d = b++;



// alert( 1 || 0 ); // 1 (1 is truthy)

// alert( null || 1 ); // 1 (1 is the first truthy value)
// alert( null || 0 || 1 ); // 1 (the first truthy value)

// alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)


// for (let i = 0; i < 5; i++) alert( i );

for (let i = 0; i < 5; ++i) alert( i );

// question

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

<h1 id="elem">Hello from the script!</h1>


  // catch on document...
  document.addEventListener("hello", function(event) { // (1)
    alert("Hello from " + event.target.tagName); // Hello from H1
  });

  // ...dispatch on elem!
  let event = new Event("hello", {bubbles: true}); // (2)
  elem.dispatchEvent(event);

  // the handler on document will activate and display the message.

let event1 = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  clientX: 100,
  clientY: 100
});

alert(event.clientX); 