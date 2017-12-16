


let addButton = document.getElementById('id-button-add')
let container = document.getElementById('id-div-container')
addButton.addEventListener('click', function () {
    // 获取输入的值
    let input = document.getElementById('id-input-todo')
    let todo = input.value
    // 添加到container中
    insertTodo(todo,false,now())
    saveTodos()
})
function insertTodo(todo, done,time){
    let t = template(todo,done,time)
    container.insertAdjacentHTML('beforeend', t)
}
function template(todo,done,time) {
    let status = ''
    if(done){
        let status = 'done'
    }
    let t = `
    <div class="todo-cell ${status}">
        <button class="todo-done">完成</button>
        <button class="todo-delete">删除</button>
        <span class="content">${todo}</span>
        <span class="time"> ${time}</span>
    </div>
    `
    return t
}
function now(){

    let d = new Date()
    let year = d.getFullYear()
    let month = d.getMonth() +1
    let date = d.getDate()
    let hour = d.getHours()
    let min = d.getMinutes()
    let second = d.getSeconds()
    return `${year}/${month}/${date}/ ${hour}:${min}:${second}`
}

container.addEventListener('click', function (event) {

    let cell = document.getElementsByClassName('todo-cell')
    let target = event.target
    for (let i = 0; i < cell.length; i++) {
        let doneButton = document.getElementsByClassName('todo-done')[i]
        let deleteButton = document.getElementsByClassName('todo-delete')[i]
        if (target === doneButton) {
            toggerClass(target)
            saveTodos()
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
        let done = content[i].parentElement.classList.contains('done')
        let time = document.getElementsByClassName('time')[i]
        var todo = {
            content: c,
            done:done,
            // 得到页面中事件栏里面的文字
            time:time.textContent                                    // 得到页面中事件栏里面的文字
        } 
        // 得到的哈希全部放到数组里面
        todos.push(todo)
    }
    save(todos)
}
function loadTodos(){
    let todos = load()
    for (let i = 0; i < todos.length; i++) { 
        // 拿到localStorage里面的数字，并得到每一个哈希
        insertTodo(todos[i].content,todos[i].done,todos[i].time)
    }
    console.log('load'+todos)
}
loadTodos()