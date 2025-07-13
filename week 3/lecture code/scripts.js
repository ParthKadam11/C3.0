const times =document.getElementById("timeinput");
const display =document.getElementById("todo-display");
const todo = document.getElementById("taskname");
const button = document.getElementById("addbtn");

let taskcounter =2;

button.addEventListener("click",()=>{
    const task = todo.value;
    const time =parseInt(times.value);

    if(!task || isNaN(time)){
        alert("Please Enter both task and valid time in ms")
        return;
    }   
    display.innerText= `${taskcounter}.${task}`;
    setTimeout(()=>{
        display.innerText = ""
    },time)
})