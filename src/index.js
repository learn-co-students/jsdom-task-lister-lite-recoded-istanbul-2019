document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const task = document.getElementById("create-task-form");
  task.addEventListener("submit", createTask);
});

const createTask = (e) => {
  console.log("Hi")
  e.preventDefault();
  const taskDes = document.getElementById("new-task-description");
  const newTask = document.createElement("li")
  newTask.innerText = taskDes.value;
  addTask(newTask);
  e.target.reset();

}
const addTask = task => {
  document.getElementById("tasks").appendChild(task);
};