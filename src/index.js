document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
var generalID = 1;
function delTask (elementID) {
  let element = document.getElementById(elementID);
  element.parentNode.removeChild(element);
}

function todoList () {
  event.preventDefault();

  let currentID = generalID;

  let newTask = document.querySelector("#new-task-description").value;
  let li = document.createElement("li");
  let delButton = document.createElement("button");

  delButton.innerHTML = "X";
  delButton.classList.add("removeButton");
  li.innerHTML = newTask;

  li.setAttribute("id", currentID);
  delButton.setAttribute("id", (currentID+1));

  delButton.addEventListener("click", function(){
    delTask(currentID);
  });

  let ul = document.querySelector("#tasks");
  li.appendChild(delButton);
  ul.appendChild(li);

  generalID += 2;
}

let keyboard = document.querySelector("#new-task-description");

keyboard.addEventListener("keydown", function(event){
  if (event.keyCode == 13) {
    todoList();
  }
});
