document.addEventListener("DOMContentLoaded", () => {
    // your code here
    function todo() {
        let newItem = document.createElement('li')
        newItem.innerText = document.querySelector('input[type="text"]').value
        document.querySelector("#tasks").appendChild(newItem);

    }
    document.querySelector('input[type="submit"]').addEventListener("click", function(e) {
        e.preventDefault();
        todo();
    })
});