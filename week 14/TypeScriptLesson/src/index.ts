//Greet User
function greet(firstNames: string | number){
    console.log(`Hello,${firstNames}`)
}
greet("Parth")

//Sum of two element
function sum(a:any,b:any){
    return a+b
}
let ans = sum(1,2)
console.log(ans)

//Is an adult??
function adult(age:number):boolean{
    if(age>18)
        return true
    else{
        return false
    }
}
console.log(adult(19))

//get a function and run it after 1 sec
function OneSec(fn:()=>void){
    setTimeout(fn, 1000);
}
function print(){
console.log("Function Called")
}
OneSec(print)