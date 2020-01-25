

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const toDoList = [];
  const newTaskForm = document.getElementById("create-task-form");
  
  function getItem() {
    const item = document.getElementById('new-task-description').value;
    toDoList.push(item);
  }



  function showToDo(toDoList) {
    let message;
    if (toDoList.length == 0) {
      message = `There is no any ToDo in the list!`
    } else {

      for (let i = 0; i < toDoList.length; i++) {
        message += `<li>${toDoList[i]}</li><br>`;
      }
    }
    return message;
  }
  
  newTaskForm.addEventListener('submit', function (f) {
    f.preventDefault();
    getItem();
    document.getElementById('tasks').innerHTML = showToDo(toDoList);
  })

});
