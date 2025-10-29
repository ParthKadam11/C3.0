/*interface Manager{
    name:String,
    age:number,
    startDate:number
}
interface Employee{
    name:String,
    department:String
}
type teamlead= Manager & Employee

let t:teamlead={
    name:"Harkirat",
    age:20,
    startDate:20-10-22,
    department:"Product"
}
interface User2{
    name:string,
    age:number
}
type User={
    name:string,
    age:number
}
function isLegal(user:User){
    return user.age>18
}*/
/*
//Create a function that takes user or manager as a adminand returns greet them as "Hello admin, name"
interface Admin{
    name:string
    permission:string
}
interface User{
    name:string,
    age:number
}
type Person=Admin |User
function greet(user:Person):string{
    return `Welcome!, ${user.name}`
}
console.log(greet({name:"Parth",age:20,permission:"HOD"}))
*/
//Arrays in TS
//Given array of numbers return maximum element 

//Given a interface write a function that filter out user that are legal
interface User{
    firstName:string,
    lastName:string,
    age:number
}
//Answer1

/*
function isLegal(array:User[]){
    let filterUser=[]
    for(let i=0;i<array.length;i++){
        const currentUser:User | undefined = array[i]
        if (currentUser) {
        if(currentUser.age>18){
            filterUser.push(currentUser)
        }    
    
    }
    return filterUser
}}

const ans = isLegal([{firstName:"Parth",lastName:"Kadam",age:20},{firstName:"Harkirat",lastName:"Singh",age:10}])
console.log(ans)
*/
/*
function filtered(user:User[]){
    let ansr=[]
    for(let i=0;i<user.length;i++){
        if(user[i].age>18){
            ansr.push(user[i])
        }
    }
    return ansr
}

const ans = filtered([{firstName:"Parth",lastName:"Kadam",age:20},{firstName:"Harkirat",lastName:"Singh",age:10}])
console.log(ans)

*/