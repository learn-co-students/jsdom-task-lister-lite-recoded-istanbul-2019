document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function addTodo(){
    let newElement = document.createElement('li')
    newElement.innerText = document.querySelector('input[type="text"]').value
    document.querySelector("#tasks").appendChild(newElement);

  }
  document.querySelector('input[type="submit"]').addEventListener("click",function(e){
    e.preventDefault();
    addTodo();
  })
});
