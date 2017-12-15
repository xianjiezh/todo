


let addButton = document.getElementById('id-button-add')
let container = document.getElementById('id-div-container')
addButton.addEventListener('click', function () {
    let input = document.getElementById('id-input-todo')
    let toDo = input.value
    let t = template(toDo)
    if (toDo !== '') {
        container.insertAdjacentHTML('beforeend', t)
    } else {
        alert('请输入待完成事件')
    }
})
function template(todo) {
    let t = `
    <div class="todo-cell">
        <button class="todo-done">完成</button>
        <button class="todo-delete">删除</button>
        <span>${todo}</span>
    </div>
    `
    return t
}

container.addEventListener('click', function (event) {

    let cell = document.getElementsByClassName('todo-cell')
    console.log(cell)
    console.log(event.target)
    let target = event.target
    for (let i = 0; i < cell.length; i++) {
        let doneButton = document.getElementsByClassName('todo-done')[i]
        let deleteButton = document.getElementsByClassName('todo-delete')[i]
        if (target === doneButton) {
            toggerClass(target)
        } else if(target === deleteButton){
            target.parentElement.remove()
        }
        
    }
    
    
})

function toggerClass(target) {
    if (target.parentElement.classList.contains('done')) {
        target.classList.remove('done')
    } else {
        target.parentElement.classList.add('done')
    }
}