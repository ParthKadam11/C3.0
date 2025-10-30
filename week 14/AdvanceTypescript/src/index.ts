interface User{
    id:string,
    name:string,
    email:string,
    age:number,
    password:string
}

type UpdateUser= Pick <User,"name"|"age"|"email">

function updatedUser(user:UpdateUser){
    //hit database to store user
}