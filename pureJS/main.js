


let addButton = document.getElementById('id-button-add')
let container = document.getElementById('id-div-container')
addButton.addEventListener('click', function () {
    // 获取输入的值
    let input = document.getElementById('id-input-todo')
    let todo = input.value
    // 添加到container中
    insertTodo(todo)
    saveTodos()
})
function insertTodo(todo){
    let t = template(todo)
    container.insertAdjacentHTML('beforeend', t)
}
function template(todo) {
    let t = `
    <div class="todo-cell">
        <button class="todo-done">完成</button>
        <button class="todo-delete">删除</button>
        <span class="content">${todo}</span>
    </div>
    `
    return t
}

container.addEventListener('click', function (event) {

    let cell = document.getElementsByClassName('todo-cell')
    let target = event.target
    for (let i = 0; i < cell.length; i++) {
        let doneButton = document.getElementsByClassName('todo-done')[i]
        let deleteButton = document.getElementsByClassName('todo-delete')[i]
        if (target === doneButton) {
            toggerClass(target)
        } else if (target === deleteButton) {
            target.parentElement.remove()
            saveTodos()
        }
    }

})

function toggerClass(target) {
    if (target.parentElement.classList.contains('done')) {
        target.parentElement.classList.remove('done')
    } else {
        target.parentElement.classList.add('done')
    }
}
function save(todos) {
    let s = JSON.stringify(todos)
    localStorage.todos = s
}
function load() {
    return JSON.parse(localStorage.todos)
}

function saveTodos(){
    let content = document.getElementsByClassName('content')
    let todos = []
    for (let i = 0; i < content.length; i++) {
        let c = content[i].textContent
        todos.push(c)
    }
    save(todos)
    console.log('localStorage' + ' ' + localStorage.todos)
}
function loadTodos(){
    let todos = load()
    for (let i = 0; i < todos.length; i++) { 
        insertTodo(todos[i])
    }
}
loadTodos()