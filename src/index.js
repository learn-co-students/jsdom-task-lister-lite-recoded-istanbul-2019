document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("click", function(event) {
    event.preventDefault();
  })
  addList();

});
//-------------- Variables -------------------------------

let tasksForm = document.getElementById("create-task-form");
let textValue = document.getElementById("new-task-description");


//-------------- Functions -------------------------------

function addList() {

  tasksForm.addEventListener("click", function () {
    let taskDescription = textValue.value,
        tasksContainer = document.getElementById("tasks"),
        task = document.createElement("li"),
        textNode = document.createTextNode(taskDescription),
        removeButton = document.createElement("button"),
        buttonContent = document.createTextNode("X");
        removeButton.className = "remove"

    if (taskDescription !== "") {
      task.appendChild(textNode);
      removeButton.appendChild(buttonContent);
        removeButton.onclick = function() {
        removeButton.parentElement.remove();
      }
      task.appendChild(removeButton);
      tasksContainer.appendChild(task);
      tasksForm.reset();
    }

  })

  }


