document.addEventListener("DOMContentLoaded", () => {
function firstfunc(){
    let listing = document.createElement('li');
    let theValue = document.querySelector('#new-task-description').value;
    listing.innerText = theValue;
    document.querySelector('#tasks').appendChild(listing);
  }
  document.querySelector("#create-task-form").addEventListener("submit", function (e){
  e.preventDefault();
  firstfunc();
  })
  });