document.addEventListener("DOMContentLoaded",() => {
   // Use id of the form  to prevent the submit button from working 
    document.getElementById("create-task-form").addEventListener("submit",function(event){
    event.preventDefault();
}, false);
 }); 