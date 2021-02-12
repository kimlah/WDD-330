function activeFilter(todos) {
    return todos.filter( todo => {
        // if todo id is not completed then return
        return !todo.completed
    })
}

function completedFilter(todos) {
    return todos.filter(todos => {
        return todo.completed
    })
}

export default {
    activeFilter
}