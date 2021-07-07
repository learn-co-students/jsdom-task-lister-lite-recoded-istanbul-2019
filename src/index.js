document.addEventListener("DOMContentLoaded", () => {



    // your code here
    // deleteX = window.document.createElement("button");
    // deleteX.textContent = "X";
    let ul = document.getElementById("tasks");

    function addTask() {
        event.preventDefault();
        let deleteX = document.createElement("button");
        deleteX.textContent = "X";
        let input = document.getElementById("new-task-description")
        let inp = document.getElementById("new-task-description").value
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = inp + " "

        let date = document.getElementById("dueTo").value
        let dateText = document.createElement("span")
        dateText.textContent = "| Due to: " + date
        dateText.style.marginLeft = "10px"
        dateText.style.marginRight = "10px"

        let editButton = document.createElement("button");
        editButton.textContent = "Edit"

        let okButton = document.createElement("button")
        okButton.textContent = "Confirm"
        okButton.style.display = "none"

        let drop = document.createElement("select");
        let option0 = document.createElement("option");
        option0.text = "Select a color for priority"
        option0.value = "black"
        option0.selected = "selected"
        let option1 = document.createElement("option");
        option1.text = "Red"
        option1.value = "red"
        let option2 = document.createElement("option");
        option2.text = "Yellow"
        option2.value = "gold"
        let option3 = document.createElement("option");
        option3.text = "Green"
        option3.value = "green"

        drop.appendChild(option0)
        drop.appendChild(option1)
        drop.appendChild(option2)
        drop.appendChild(option3)

        li.appendChild(span)


        li.appendChild(dateText)
        li.appendChild(drop)
        li.appendChild(editButton)
        li.appendChild(okButton)
        li.appendChild(deleteX)

        ul.style.display = "flex"
        ul.style.flexDirection = "column"

        ul.appendChild(li);


        input.value = ""

        editButton.addEventListener("click", function() {
            okButton.style.display = "inline-block"
            span.contentEditable = "true"
            span.style.border = "1px blue solid"
            span.focus()
            okButton.addEventListener("click", function() {
                okButton.style.display = "none"
                span.style.border = "none"
                span.contentEditable = "false"
            })
        })

        drop.addEventListener("change", function() {
            let selectedColor = drop.value;
            li.style.color = selectedColor
            li.className = selectedColor;
        })





        deleteX.addEventListener("click", function() {
            deleteX.parentNode.remove();
        })


    }





    let form = document.getElementById("create-task-form");
    form.addEventListener("submit", addTask)

});