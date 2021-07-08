document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const addBtn = document.querySelector('[type=submit]');
  const list = document.querySelector('#tasks');

  function createItem(str) {
    let item = document.createElement('LI');
    //let itemText = document.createTextNode(str);
    //item.append(itemText);
    item.innerHTML = str + ' <button data-description="' + str + '">X</button>';
    
    let button = item.getElementsByTagName('button')[0];
    button.addEventListener("click", function(event) {
      item.remove();
    });

    return item;
  }

  addBtn.addEventListener("click", function(event) {
    const task = document.querySelector('[type=text]').value;
    event.preventDefault();
    list.append(createItem(task));
    
  });


});
