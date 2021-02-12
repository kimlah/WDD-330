import utilities from './utilities.js';
import ls from './ls.js';

// load list
loadTodos();

// Add event listeners
document.querySelector('#addBtn').onclick = newToDo;
document.querySelector('#allFilter').onclick = applyFilter;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#completedFilter').onclick = applyFilter;

function loadTodos() {
    const todoList = ls.getTodoList();

    todoList.forEach(todo => {
        const el = createTodoElement(todo)
        addToList(el);
    })
}

function newToDo() {
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo(todo);
}

function createTodo() {
    const input = document.querySelector('#todoInput');
    const newTodo = {id: Date.now(), content: input.value, completed: false}
    input.value = '';
    return newToDo;
}

function createTodoElement(todo) {
    // create todo div, add a class to style with css
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create complete button, add a class to style with css
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');

    // create todo content, make todo content todo.content, add a class to style with css
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    // create delete button, set data-id to todo.id, add a class to style with css, set inner text to an X, onclick of button run deleteTodo
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = 'X';
    deleteBtn.onclick = deleteTodo;

    // append both buttons and content
    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

function addToList(todoDiv) {
    // Add to the document
    document.querySelector('#todos').appendChild(todoDiv);
}

// Event handlers
function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}

function toggleComplete(e) {

}

function applyFilter(e) {
    // clear the list
    document.querySelector('#todos').innerHTML = '';

    // Declare variables
    let filteredTodos = [];
    const allTodos = ls.getTodoList();

    // Check which filter to apply
    if(e.currentTarget.id == 'activeFilter') {
        filteredTodos = utilities.activeFilter(allTodos)
    } else if (e.currentTarget.id == 'allFilter') {
        filteredTodos = allTodos
    } else {
        filteredTodos = utilities.completedFilter(allTodos)
    }

    // Draw the list
    filteredTodos.forEach( todo => {
        const el = createTodoElement(todo)
        addToList(el)
    })
}