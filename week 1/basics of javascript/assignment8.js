//Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male
/*
function is18(users){
    const maleadults=[];
    const adults=[];
    for(let i=0;i<users.length;i++){
        if(users[i].age>18){
            adults.push(users[i]);
        }
    }for (let i = 0; i < adults.length; i++) {
    if (adults[i].gender === "male") 
        {
      maleadults.push(adults[i]);
    }
    }return maleadults;
}
let users=[
    
    {name:"harkirat",
    age:22,
    gender:"male"},
    {   name:"Parth",
        age:11,
        gender:"male"
    }
]
let result=is18(users);
console.log(result);
*/

//using fliter 
function getAdultMales(users) {
  return users.filter(user => user.age > 18 && user.gender === "male");
}
const users = [
  { name: "Harkirat", age: 22, gender: "male" },
  { name: "Parth", age: 10, gender: "male" },
  { name: "Aisha", age: 25, gender: "female" }
];

const result = getAdultMales(users);
console.log(result);
