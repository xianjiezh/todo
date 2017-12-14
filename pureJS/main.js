



let addButton = document.querySelector('#id-button-add')
addButton.addEventListener('click', function () {
    let todoInput = document.querySelector('#id-input-todo')
    let todo = todoInput.value
    console.log(todo)
    let todoContainer = document.querySelector('#id-div-container')
    let t = templateTodo(todo)
    todoContainer.innerHTML = t
}, false)

function templateTodo(todo){
    let t = `
    <div class="todo-cell">
        <button class="todo-down">完成</button>
        <button class="todo delete">删除</button>
        <span contenteditable="ture">${todo}</span>
    </div>
`
    return t
}
    
