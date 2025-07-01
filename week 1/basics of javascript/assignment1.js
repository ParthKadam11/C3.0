//Write a function sum that finds the sum of two numbers. 
//Side quest - Try passing in a string instead of a number and see what happens?


function sum(n1,n2){
    return n1+n2;
}
let add=sum(2,3);
console.log(add);//prints 5
let stringadd=sum("Hello ","world!");
console.log(stringadd); //prints Hello world!