document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.querySelector('#new-task-description').value;
    const li = document.createElement('li');
    li.textContent = input;
    const ul = document.querySelector('#tasks');
    ul.appendChild(li);
  })
});
