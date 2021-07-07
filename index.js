document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.querySelector("#new-task-description")
    const taskForm = docuemnt.querySelector("#create-task-form")
    taskForm.addEventtListener('submit',function(e){
        e.preventDefault()
        const newTask = taskInput.value
        const list = document.querySelector("#tasks")
        const newLi = docuemnt.createElement('Li')
        newLi.innerText = newTask
        const deleteButton = document.createElement('button')

        deleteButton.innerText = 'x'
        list.appendChild(newLi)
        deleteButton.addEventListener('click')
        newLi.remove()   
    })
    
    taskForm.reset()
})