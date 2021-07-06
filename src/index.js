document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let description = document.getElementById("new-task-description");
  let taskList = document.getElementById("tasks");

  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let descriptionValue = description.value;
    description.value = "";

    if (descriptionValue !== "") {
      let delButton = document.createElement("button");
      delButton.innerHTML = "delete";
      delButton.setAttribute("data-description", descriptionValue);

      let task = document.createElement("li");
      task.innerHTML = descriptionValue;

      
      
      delButton.addEventListener("click", function(event) {
        taskList.removeChild(task);
      });

      task.appendChild(delButton);
      taskList.appendChild(task);
    }
  }, false);

  

});

