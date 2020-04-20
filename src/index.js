document.addEventListener("DOMContentLoaded", () => {
// let text = document.getElementById("text")
// text.textContent = "This is relly cool!"

let userInput = document.getElementById("new-task-description");
let form = document.getElementById("create-task-form");
let taskList = document.getElementById("tasks");


form.addEventListener("submit", creatTask); //selected the "submit" button when do function (write what is in the input box) 

function creatTask(e) {
   e.preventDefault()
let newTask = document.createElement("li");


newTask.innerHTML = userInput.value ; /// the result should be the new writtinn task (the user input)
taskList.appendChild(newTask);

event.target.reset()
}
});




