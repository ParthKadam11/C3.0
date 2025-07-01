//concept of array of objects
/*let arr=["harkirat",21,{
    name:"harkirat",
    age:21,
    city:["pune","usa","dubai",{
        state:"mayami",
        city:"new york"
    }]
}]
console.log(arr[2].city[3].state);
*/

//Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
function is18(users){
    const adults=[];
    for(let i=0;i<users.length;i++){
        if(users[i].age>18){
            adults.push(users[i]);
        }
    }return adults;
}

let users=[
    
    {name:"harkirat",
    age:22,
    gender:"male"},
    {   name:"Parth",
        age:10,
        gender:"male"
    }
]
let result=is18(users);
console.log(result);
