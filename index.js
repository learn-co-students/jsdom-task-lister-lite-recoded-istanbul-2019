document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit").addEventListener("click",function(event){
     const a = document.getElementById("new-task-description");
      const a = document.getElementById("new-task-description");
       const li = document.createElement("li");
     const b = document.getElementById("tasks");
    
  });
});
function deleteme(){
  let c=document.querySelectorAll('li')
  if(c.length>0){
    c[c.length-1].remove();
  }
}