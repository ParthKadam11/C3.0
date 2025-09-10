//delete node
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
    divcreate.innerHTML = `
        <div class="border">
            <div class="todo">
                ${taskno}.${texts}
            </div>
            <div class="delbutton">
                <button onclick="deletenode(${taskno})">Task Done</button>
            </div>
        </div>`
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
//Auth Functions
//signup 
async function signup(){
        const username=document.getElementById("A1").value;
        const password=document.getElementById("A2").value;

        await axios.post("http://localhost:3000/signup",{
            username:username,
            password:password
        })
        alert("You Are Signed UP!!")
    }
//signin
async function signin(){
        const username=document.getElementById("B1").value;
        const password=document.getElementById("B2").value;

        const response =await axios.post("http://localhost:3000/signin",{
            username:username,
            password:password
        })
        
        try{
            const tokens=response.data.token
            if(tokens){
            localStorage.setItem("token",tokens)
            alert("You are Signed In!!")}
            else{alert("Incorrect Credentials")}
        }catch(err){
            alert("Error while tokenizing")
        }
        checkauth();
    }

//getinfo to chekck token validation
async function getinfo(){
        try{
            const response=await axios.get("http://localhost:3000/me",{
            headers:{
                token:localStorage.getItem("token")
            }})
            document.getElementById("USERNAME").innerHTML=response.data.username
            return true         
        }
        catch(err){
            console.log("Not logged in or invalid token")
        return false
        }
    }

//checkauth to display certain html
async function checkauth(){
        const valid =await getinfo()
        if(valid){
            document.getElementById("AuthSection").style.display="none";
            document.getElementById("UserSection").style.display="block";
        }else{
            document.getElementById("AuthSection").style.display="block";
            document.getElementById("UserSection").style.display="none";
        }
    }

function logout(){
    localStorage.removeItem("token")
    checkauth()
}
//this executes the function as site loads
checkauth();


