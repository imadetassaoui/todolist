//Variables

const add = document.querySelector("#add");
//const uncheck=document.querySelector("#checked")
let tasks = document.querySelector("#tasks");
let task = document.querySelector(".task");
//let box = document.getElementById("taskk");


const addTask = () => {
    let newTask = document.getElementById("newTask").value;
    let li = document.createElement("li");
    let input = document.createElement("input");
    let label=document.createElement("label");
    input.setAttribute("type","checkbox");
    //input.setAttribute("id","test");
    //li.setAttribute("id","taskk")
    if(newTask!=""){
    label.appendChild(document.createTextNode(newTask));
    tasks.appendChild(li);
    li.appendChild(input);
    li.appendChild(label);
    }
}
const valid = () =>{
alert("test)");


            
}

add.addEventListener("click", addTask);
box.addEventListener("click",valid);


