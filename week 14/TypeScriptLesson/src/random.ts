/*interface Address{
city:string,
    country:string,
    pincode:number
}
interface User{
    name:string,
    age:number,
    address:Address
}
let user:User={
    name:"Harkirat",
    age:2,
    address:{
        city:"Pune",
        country:"India",
        pincode:410506
    }
}
function isLegal(user:User):boolean{
return user.age>18
}
console.log(isLegal(user))
let person:People={
    name:"Parth",
    age:30,
    greet:(nav)=>{
        return nav
    }
}
console.log(person.greet("Hello World"))
*/

interface People{
    name:string,
    age:number,
    isLegal():boolean
}

class Manager implements People{
    constructor(public name:string,public age:number){
    this.name=name,
    this.age=age
    }
    isLegal(){
        if(this.age > 18){
            return true
        }else return false
    }
}

let man=new Manager("John",30)
console.log(man.isLegal())

