function createTodo() {
    const listItem = document.createElement("li");
    const todosContainer = document.getElementById("todos-container");
    const userInput = document.getElementById("note").value.trim();

    if (!userInput) {
        return;
    }

    listItem.innerHTML = userInput;
    listItem.setAttribute("onclick", "todoCheck(event, this)");
    todosContainer.appendChild(listItem);
    document.getElementById("note").value = "";
}

function deleteTodos() {
    document.getElementById("todos-container").innerHTML = "";
}

function todoCheck(e, todo) {
    if (todo.style.textDecoration === "") {
        todo.style.textDecoration = "line-through";
    } else {
        todo.style.textDecoration = "";
    }
}