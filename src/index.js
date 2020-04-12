document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let input= document.getElementById("new-task-description");
  let submit= document.querySelectorAll("input")[1];

  let dueDate= document.getElementById("dueDate");
  let dueDatebtn= document.getElementById("addDueDate");
  //enter keypress activation
  input.addEventListener('keyup',(e) =>{
    if(e.keyCode === 13){
      addTask;
    }
  });
  // event.preventDefault(); prevent the submition default of the form 
  submit.addEventListener("click",function(event) {
      event.preventDefault();
      addTask();
  }, false);
  //for adding due date.  
  dueDatebtn.addEventListener("click",function(event) {
      event.preventDefault();
      addDueDate();
  }, false);

  function addTask(){
    let li = document.createElement('li');
    let span = document.createElement('span');
    let btn = document.createElement('button');
    let item= input.value;
    li.appendChild(span);
    li.appendChild(btn);
    span.textContent= item;
    btn.textContent= 'x';
    document.getElementById("tasks").appendChild(li);
    btn.addEventListener("click",function(){
      li.remove();
    });
    input.value='';
    input.focus();
  }
  function addDueDate(){
      let para = document.createTextNode("needs to be done until"+ dueDate.value);
      document.getElementById("list").appendChild(para);
      dueDate.value=' ';
      dueDate.focus();
  }

});
