
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let TaskForm = document.getElementById("create-task-form");
  TaskForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    let item = document.getElementById('new-task-description').value;
    
    let del= document.createElement('span');
    let ex = document.createTextNode('\u00D7');
    del.appendChild(ex);
    del.className='close';
    
    var forLi= document.createElement('li');
    forLi.textContent=item+'      ';
    forLi.appendChild(del);
    document.getElementById('tasks').appendChild(forLi);
    
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
    });
});
