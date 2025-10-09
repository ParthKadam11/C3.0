/*setTimeout is an asynchronous function
Syntax=  setTimeout(function_name_only , Time_in_Milliseconds)  
Ex. setTimeout(print,5000)
    here print function gets callback when 5 seconds are passed 
*/
const node= require("fs");

function print(err,data){//This function act as a task done reminder if an error exits it shows error if not the data is printed 
    console.log(data);
}
node.readFile("week2/a.txt","utf-8",print);//This runs after printing done!! cause console.log>>i/o operation
node.readFile("week2/b.txt","utf-8",print);//runs simulataneously 

console.log("Done!!");//This Prints First

/*
A better way to make a remainder Function is(in this case)
funtion print(err,data){
    if(err){
        console.log("File Not Found");
    }else{
        console.log(data);    }

}
*/