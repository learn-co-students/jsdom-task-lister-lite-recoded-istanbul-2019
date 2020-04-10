document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();
}, false);
let text = document.getElementById(new-task-description).nodeValue;
let listItem = text;

function addNewItem() {
  let listItem = document.createElement("li");
getElementById(tasks).appendChild(listItem);
}
