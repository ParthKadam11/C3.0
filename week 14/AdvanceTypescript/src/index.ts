//Pick
/*
    interface User{
        id:string,
        name:string,
        email:string,
        age:number,
        password:string
    }

    type UpdateUser= Pick <User,"name"|"age"|"email">//picking certain properties from interface

    function updatedUser(user:UpdateUser){
        console.log(`Hello ${user.name} of age ${user.age}`)
    }

    const user1={name:"Parth",age:20,email:"kjashfa@gmailsd.com"}
    updatedUser(user1)
*/
//Partial or Optional ?
/*    type UpdateUserOptional=Partial<UpdateUser>//making everything of type optional
    const user2:UpdateUserOptional={name:"Parth",age:20}
*/
//ReadOnly
/*    interface users{
        readonly name:string,
        age:number
    }
    const paidUser:users={
        name:"Parth",
        age:30
    }
    paidUser.age=20//age can be changed because its not readonlu 
    //paidUser.name="Harkirat"       //see name cannot be changed because its readonly 
    const freeUser:Readonly<users> ={
    name:"Harkirat",
    age:30
    }
    //here everything becomes readonly
*/
//Record 
/*    type User={
        [key:string]:number
    }
    const userObject:User={
        "Parth":20,
        "Harkirat":30   
    }
    type Users=Record<string,number>
*/
//Map
/*    type users={
        name:string,
        age:number
    }
    const user=new Map<string,users>()
    user.set("Parth",{name:"aditya",age:20})
    user.set("Harkirat",{name:"kirat",age:20})

    const users=user.get("Parth")
    console.log(users)
*/
//Exclude
/*    type eventType = "click"|"scroll"|"mousemove"
    type excludeScroll=Exclude<eventType,"scroll">
    const handleEvent=(event:excludeScroll)=>{
        console.log(`${event}`)
    }
    handleEvent("click")//OK
    handleEvent("scroll")//Not Ok
*/