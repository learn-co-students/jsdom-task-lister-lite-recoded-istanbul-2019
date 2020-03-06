document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector('[type=submit]');
  const list = document.querySelector('#tasks');
  addBtn.addEventListener("click", function(event) {
    const task = document.querySelector('[type=text]').value;
    event.preventDefault();
    let item = document.createElement('li');
    item.innerHTML = task + ' <button data-description="' + task + '">delete</button>';
    let button = item.getElementsByTagName('button')[0];
    button.addEventListener("click", function(event) {
      item.remove();
    });
    list.append(item);

  });});
