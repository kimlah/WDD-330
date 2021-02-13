import utilities from './utilities.js';
    // ls stands for local storage
import ls from './ls.js';



// Add event listeners
document.querySelector('#addBtn').onclick = newTodo;
document.querySelector('#allFilter').onclick = applyFilter;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#completedFilter').onclick = applyFilter;

// load todos from local storage
function loadTodos() {
    const todoList = ls.getTodoList();

    // iterate over list
    todoList.forEach(todo => {
        const el = createTodoElement(todo)
        addToList(el);
    })
}

function newTodo() {
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    // from ls retrieve saveTodo
    ls.saveTodo(todo);
}

// create todo item with unique id based on time, content is value and boolean to see if completed
function createTodo() {
    const input = document.querySelector('#todoInput');
    const newTodo = {id: Date.now(), content: input.value, completed: false}
    input.value = '';
    return newTodo;
}

function createTodoElement(todo) {
    // create todo div, add a class to style with css
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create complete button, add a class to style with css
    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('data-completed', todo.completed);
    completeBtn.classList.add('complete-btn');
    //completeBtn.onclick = toggleComplete;
    

    // create todo content, make todo content todo.content, add a class to style with css
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    // create delete button, set data-id to todo.id, add a class to style with css, set inner text to an X, onclick of button run deleteTodo
    const deleteBtn = document.createElement('button');
    // data-id is the todo item id to know which todo item to delete
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;

    // append both buttons and content
    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

function addToList(todoDiv) {
    // Add new todo to the list
    document.querySelector('#todos').appendChild(todoDiv);
}

// Event handlers
function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    // clear list
    document.querySelector('#todos').innerHTML = '';
    // reload with list items not deleted
    loadTodos();
}

/*function toggleComplete(e) {
    const btn = e.currentTarget;
    ls.toggle(btn.getAttribute('data-completed'));
}*/

// e is the event passed in on button click
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
    } else if(e.currentTarget.id == 'completedFilter') {
        filteredTodos = utilities.completedFilter(allTodos)
    }

    // Draw the list
    filteredTodos.forEach( todo => {
        const el = createTodoElement(todo)
        addToList(el)
    })
}