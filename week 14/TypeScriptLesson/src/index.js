"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Greet User
function greet(firstNames) {
    console.log(`Hello,${firstNames}`);
}
greet("Parth");
//Sum of two element
function sum(a, b) {
    return a + b;
}
let ans = sum(1, 2);
console.log(ans);
//Is an adult??
function adult(age) {
    if (age > 18)
        return true;
    else {
        return false;
    }
}
console.log(adult(19));
//get a function and run it after 1 sec
function OneSec(fn) {
    setTimeout(fn, 1000);
}
function print() {
    console.log("Function Called");
    return "Hello";
}
console.log(OneSec(print));
//# sourceMappingURL=index.js.map