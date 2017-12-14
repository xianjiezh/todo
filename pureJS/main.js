



let addButton = document.querySelector('id-input-todo')
addButton.addEventListener('click', function () {
    let todoInput = document.querySelector('#id-input-todo')
    let todo = todoInput.nodeValue
    let todoContainer = document.querySelector('id-div-container')
    let t = templateTodo(todo)
    todoContainer.insertAdjacentElement('beforeend',t)
}, false)

function templateTodo(todo){
    var t = `<div class="todo-cell">
                <button class="todo-down">完成</button>
                <button class="todo delete">删除</button>
                <span contenteditable="ture">${todo}</span>
            </div>
        `
    return t
}
    
