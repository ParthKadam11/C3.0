interface Manager{
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