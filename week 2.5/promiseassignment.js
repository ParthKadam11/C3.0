/* 
Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2 */

function step1Done() {
  console.log("hi");
  setTimeout(step2Done, 3000);
}
function step2Done() {
  console.log("hello");
  setTimeout(step3Done, 5000);
}
function step3Done() {
  console.log("hello there");
}

setTimeout(step1Done, 1000);