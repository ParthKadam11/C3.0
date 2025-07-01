//Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
//Also tell the user if they are legal to vote or not
function greet(user){
    let greeings;
    if(user.gender=="male"){
    greetings="Mr";
    }else{
    greetings="Mrs."}
    console.log("Hello "+ greetings+ user.name+" Your Age is "+user.age);
    if(user.age>=18){
        console.log("You can Vote");
    }else{
        console.log("You cannot vote");
    }
}
let user ={
    name:"Harkirat",
    age:21,
    gender:"male"
}
greet(user);



