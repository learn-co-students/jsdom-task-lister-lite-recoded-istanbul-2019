document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let ul = document.getElementById("tasks");
  document.getElementById("submit-button").addEventListener("click",function(event){
    event.preventDefault();
    let li = document.createElement("li");
    let textValue = document.getElementById("new-task-description").value;
    li.appendChild(document.createTextNode(textValue));
    li.setAttribute("class","ta");
    ul.appendChild(li);
  });

  ul.addEventListener("click",function(e){
    if(e.target && e.target.matches("li.ta")){
      e.target.id = "del";
      let d = document.getElementById("del");
      ul.removeChild(d);
    }
  })

});
