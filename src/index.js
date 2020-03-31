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


  /*
  To delete list items of the unordered list when we click them we will use event delegation for the dynamically created elements.
  With this, you only need one event listener on the ul#list and it will work for all elements you dynamically attach to it.
  */
  ul.addEventListener("click",function(e){
    if(e.target && e.target.matches("li.ta")){
      e.target.id = "del";
      let d = document.getElementById("del");
      ul.removeChild(d);
    }
  })
});
