function activeFilter(todos) {
    return todos.filter( todo => {
        // if todo id is not completed then return
        return !todo.completed
    })
}

function completedFilter(todos) {
    return todos.filter(todos => {
        return todos.completed
    })
}

export default {
    activeFilter,
    completedFilter
}