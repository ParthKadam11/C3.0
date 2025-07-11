/*
Call back Approach
function login(){
    console.log("Hello World");
}
setTimeout(login,2000);//calls login function after 2 sec
//This is call back based approach
*/

//Defining a promise is HARD but using them is easy
//A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

function setTimeoutPromisified(resolve){
    setTimeout(resolve,3000);
}
function hello(){
    console.log("Print Hello");
}
setTimeoutPromisified(hello);