


let addButton = document.getElementById('id-button-add')
addButton.addEventListener('click', function () {
    let container = document.getElementById('id-div-container')
    let input = document.getElementById('id-input-todo')
    let toDo = input.value
    container.innerHTML = template(toDo)
})

function template(todo) {
    let t = `
    <div class="todo-cell">
        <button class="todo-down">完成</button>
        <button class="todo delete">删除</button>
        <span contenteditable="ture">${todo}</span>
    </div>
    `
    return t
}


