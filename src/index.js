document.addEventListener("DOMContentLoaded", () => {
let form =  document.querySelector("#create-task-form");

form.addEventListener("submit", event =>{
  event.preventDefault();
  function submit (){
    document.querySelector("#create-task-form").submit;
  }
}) ;

  // your code here
});
