document.addEventListener("DOMContentLoaded", () => {
  function add(){
    let newElement = document.createElement('li');
    newElement.innerText = document.querySelector('#new-task-description').value;
    document.querySelector('#tasks').appendChild(newElement);
    document.querySelector('#new-task-description').value = "";
  }

  document.querySelector("#create-task-form").addEventListener("submit", function (e){
  e.preventDefault();
  add();
 })

// function addTodo(){
//   let newElement = document.createElement('li')
//   newElement.innerText = document.querySelector('input[type="text"]').value
//   document.querySelector("#tasks").appendChild(newElement);
// }
// document.querySelector('#create-task-form').addEventListener("submit",function(e){
//   e.preventDefault();
//   addTodo();
// })
});
