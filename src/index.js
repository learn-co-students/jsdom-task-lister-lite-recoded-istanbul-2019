document.addEventListener("DOMContentLoaded", () => {
  function add(){
    let newTask = document.createElement('li');
    newTask.innerText = document.querySelector('#new-task-description').value;
    document.querySelector('#tasks').appendChild(newTask);
    document.querySelector('#new-task-description').value = "";
  }

  document.querySelector("#create-task-form").addEventListener("submit", function (e){
  e.preventDefault();
  add();
 })
});
