document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let sBtn=document.getElementById('submit');
  sBtn.addEventListener('click',function(){
    let list=document.getElementById('tasks');
  let task=document.getElementById('new-task-description').value;
  let newTask=document.createElement('li');
  newTask.innerHTML=task;
  list.appendChild(newTask);
  });
  
  let form1=document.getElementById('create-task-form');
  form1.Event.preventDefault();
});
