let submit = document.querySelector("#create-task-form input[type=submit]");
let text = document.querySelector(`#create-task-form input[type=text]`);
let tasks = document.querySelector(`#tasks`);
let li = document.createElement(`li`);

submit.addEventListener("click", function(event) {
    event.preventDefault();
    li.innerHTML = text.value;
    tasks.appendChild(li);
},false);

