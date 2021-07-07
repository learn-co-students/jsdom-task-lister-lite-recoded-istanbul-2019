
const todoForm = document.querySelector('#create-task-form')

const todoButton = document.querySelector('#todo-button')

const taskList = document.querySelector('#tasks')

function createTodo () {
  const todo = document.querySelector('#new-task-description').value
  const taskIl = document.createElement('li')
  taskIl.innerHTML = todo 
  if (todo === '') { alert('I guess you have something to do. Write it down.') }
  else { taskList.appendChild(taskIl) }
  taskIl.addEventListener('click', function createClass () {
    taskIl.className = 'done'
  })
}

todoForm.addEventListener('submit', function (event) {
  event.preventDefault()
  createTodo()
  event.target.reset()
})
