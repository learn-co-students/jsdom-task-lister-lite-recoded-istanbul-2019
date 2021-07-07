


document.addEventListener("DOMContentLoaded", () => {
function todo(){
  let creatLi = document.createElement('li');
  let getValue = document.querySelector('#new-task-description').value;
  creatLi.innerText = getValue;
  document.querySelector('#tasks').appendChild(creatLi);
}

document.querySelector("#create-task-form").addEventListener("submit", function (e){
e.preventDefault();
todo();
})
});


