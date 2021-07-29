//Variables

const add = document.querySelector("#add");

let tasks = document.querySelector("#tasks");
let task = document.querySelector(".task");

const addTask = () => {
    let newTask = document.getElementById("newTask").value;
    let li = document.createElement("li");
    let input = document.createElement("input");
    li.setAttribute("type", "checkbox");
    li.appendChild(document.createTextNode(newTask));
    li.appendChild(document.createTextNode(input));
    tasks.appendChild(li);
}

add.addEventListener("click", addTask);
