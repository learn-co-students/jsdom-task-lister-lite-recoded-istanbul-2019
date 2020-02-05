document.addEventListener("DOMContentLoaded", () => {
  // your code 
  
  document.addEventListener("click",function(e){
    e.preventDefault();
    
    const creatingList = document.createElement("li");
    creatingList.innerText = document.getElementById("new-task-description").value;
    
    document.getElementById("tasks").appendChild(creatingList);
 
    
  });
   
});
