let list = document.getElementById("tasks")


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let task= document.createElement("li")
    let input = document.getElementById("new-task-description")
    task.innerText = input.value
    list.appendChild(task)
    event.target.reset()
  })
});


