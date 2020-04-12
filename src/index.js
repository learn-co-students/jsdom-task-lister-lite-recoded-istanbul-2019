document.addEventListener("DOMContentLoaded", () => {
  
  function addNewTask(){
    let form = document.getElementById("create-task-form");
    let text = document.getElementById('new-task-description').value;
    let taskList = document.getElementById('tasks');
    let task = document.createElement("li");
    task.textContent = text;
    taskList.appendChild(task);
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "x"
    task.appendChild(deleteButton);
    deleteButton.addEventListener("click", function deleteTask(){
      deleteButton.parentNode.remove();
    });
  }; 

    /*   submite       */ 
  document.getElementById("create-task-form").addEventListener("submit", function(event){
    event.preventDefault();
    addNewTask();
  });
  });
      
