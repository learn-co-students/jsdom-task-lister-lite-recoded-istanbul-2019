document.addEventListener("DOMContentLoaded", () => {
  let inpText = document.getElementById('new-task-description');
  let ulSpot = document.getElementById("tasks");
  let inpSub = document.querySelector('input[value="Create New Task"]');

  function addSteps() {
    //create and append
    let newLI = document.createElement("LI");
    let newB = document.createElement("BUTTON");
    newLI.textContent = inpText.value;
    newB.textContent = "X";
    //add random classname to buttons
    newB.setAttribute("class", "classNum" + randomNum());
    //add same classname to li
    newLI.setAttribute("class", newB.className);
    newLI.appendChild(newB);
    ulSpot.appendChild(newLI);
    newB.addEventListener('click', btnClick, false);
    newLI.addEventListener('click', btnClick, false);
  }

  function btnClick(e) {
    //get classname of clicked item
    let newabc = e.target.className;
    let toDelete = [];
    toDelete = document.querySelectorAll(`.${newabc}`);
    toDelete[0].parentNode.removeChild(toDelete[0]);
  }

  function randomNum() {
    return Math.floor((Math.random() * 9999) + 1);
  }

  /*approach 2nd*/
  /*const clickList = document.querySelectorAll("ul li");
  for (click of clickList) {
    user.addEventListener("click", function () {
      this.style.visibility = "hidden";
    });
  };
  };*/
  // find index
  /*const objects2 = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  const foundIndex = objects2.findIndex(function (item) {
    return item.id === 'b';*/
  inpSub.addEventListener("click", function (e) {
    e.preventDefault();
    addSteps();
  });

});