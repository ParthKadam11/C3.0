//Delete Specific Task
function deletenode(tasknumber){
    const element=document.getElementById("task"+tasknumber);
    element.parentNode.removeChild(element);
}   
//Add Task
function add(){
     const inputtexts= document.querySelector("#taskdetails");
    const texts = inputtexts.value;
    const inputno =document.querySelector("#tasknumber");
    const taskno = inputno.value;
    const divcreate =document.createElement("div");
    divcreate.innerHTML=`<div><h3>${taskno}.${texts}</h3><button onclick="deletenode(${taskno})">Task Done</button></div>`
    divcreate.id=`task${taskno}`;
    divcreate.className="tasks";
    const partodo = document.querySelector("#todos");
    partodo.appendChild(divcreate); 
}
//delete all tasks   
function clearall(){
    const parnode=document.querySelector("#todos")
    const allel = document.getElementsByClassName("tasks");
    while(allel.length>0){
        parnode.removeChild(allel[0]);
    }
}

