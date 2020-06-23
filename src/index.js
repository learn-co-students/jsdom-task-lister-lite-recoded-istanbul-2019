document.addEventListener("DOMContentLoaded", () => {

  function newTask() {
    let task = document.createElement('task')
    task.innerText = document.getElementById('#new-task-description').value
    document.getElementById('#tasks').appendChild(task)
    document.getElementById('#new-task-description').value= ""
  }


  
document.querySelector("#create-task-form").addEventListener("submit", function (event) {
         event.preventDefault();
         newTask()
})



})