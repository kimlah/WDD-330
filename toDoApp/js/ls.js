function saveTodo(todo) {
    const todoList = getTodoList();

    todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function deleteTodo(id) {
    const todoList = getTodoList();

    // if not specified id, add to todo list again
    const updatedTodos = todoList.filter( todo => todo.id != id)
    // store todo input as a string
    localStorage.setItem('todoList', JSON.stringify(updatedTodos));
}

/*function toggle(id) {
    const todoList = getTodoList();
    const updatedTodos = todoList.filter( todo => todo.id == id)
    localStorage.setItem('todoList', JSON.stringify(updatedTodos));
}*/

function getTodoList() {
    const todoListString = localStorage.getItem('todoList');
    let todoList = [];

    if (todoListString) {
        // parse turns it back into an object or array
        todoList = JSON.parse(todoListString);
    }

    return todoList;
}

export default {
    // return objects by these names
    saveTodo, 
    getTodoList,
    //toggle,
    deleteTodo
}