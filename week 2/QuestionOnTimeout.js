/*What Will be printed first
*/

function timeout() {
  console.log("Click the button!");
}

console.log("Hi!");

// IO task 
setTimeout(timeout, 1000);

console.log("Welcome to Loupe!");

let c = 0;

// CPU intensive task
for (let i = 0; i < 10000000000; i++) {
    c = c + 1;
}

console.log("Expensive operation done!");//this will be printed before click the button

//Cause cpu thread is busy in an cpu intensive task.when entire program is executed timeout function gets executed till then it stays in a callback queue
//simple reason thread is busy and gets release when program is done executing