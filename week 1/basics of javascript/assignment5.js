//objects concept
/*let users={
    name:"Parth",
    age:20,
    gender:"male"
}
console.log( "name is "+users.name ,"age is "+users.age ,"gender is"+users.gender);
*/

//Write a function that takes a user as an input and greets them with their name and age
function greet(user){
    console.log("Hello "+user.name+" Your Age is "+user.age);
}
let user ={
    name:"Parth",
    age:20
}
greet(user);