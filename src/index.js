document.addEventListener("DOMContentLoaded", () => {
  // your code here
      document.getElementById("submitId").addEventListener("click", function(event) {
      event.preventDefault();
      let li = document.createElement("li"); // create an li
      li.innerText = document.getElementById("inputId").value;
      document.getElementById("tasks").appendChild(li);
      document.getElementById("inputId").value=' ';
    });
});
