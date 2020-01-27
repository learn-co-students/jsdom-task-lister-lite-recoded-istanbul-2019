document.addEventListener("DOMContentLoaded",  function() {
	// body...

  // your code here
  const newEl = document.getElementById("new-task-description");
  const tasK = document.getElementById("tasks");
  const newLi= document.createElement("li");
  
  let buton = document.getElementById("btn");
    
  	buton.onclick = function(event){
  		event.preventDefault();
  		tasK.appendChild(newLi);
  		tasK.appendChild(newLi).innerHTML=newEl.value;
  	
  }  

});
