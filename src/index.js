document.addEventListener("DOMContentLoaded", () => {
  // your code 
  document.addEventListener("submit", function(e){
    e.preventDefault();
    
    const creatingList = document.createElement("li");
    
    const newTaskDescription = document.getElementById("new-task-description").value;
    
    creatingList.innerHTML = `${newTaskDescription}`;
    
    document.getElementById("tasks").appendChild(creatingList);
    
    
  });
   
});
