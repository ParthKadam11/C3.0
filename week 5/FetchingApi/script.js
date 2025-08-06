//FETCHING 
/*
async function fetchdata(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const json = await res.json();
    console.log(json);
    console.log("Data has been fetched");
    document.getElementById("posts").innerHTML = json.title;
    document.getElementById("Body").innerHTML = json.body;
}
fetchdata();
*/

//USING EXTERNAL LIBRARY (AXIOS)
async function fetchPosts() {
    try{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/");
    const arr = res.data
    for(let i=0;i<arr.length;i++){
        document.getElementById("posts").innerHTML += "<div>"+ arr[i].title +"</div>"
    }
    }
    catch{}
}
