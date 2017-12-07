function todoReducer(state = [], action) {
    switch (action.type) {
        case('CREATE_NEW_TODO'):
            return {
                ...state,
                todoItems: [
                    ...state.todoItems,
                    {
                        id: action.payload.id,
                        content: action.payload.content,
                        isChecked: false,
                    },
                ],
            };
        case('CHECK_TODO_ITEM'):
            return {
                ...state,
                todoItems: state.todoItems.map(todo =>
                    (parseInt(todo.id) === parseInt(action.payload.id))
                        ? { ...todo, isChecked: !todo.isChecked }
                        : todo,
                ),
            };
        case('GET_DEFAULT_TODOS'):
            return {
                ...state,
                todoItems: [...action.payload] };
        case ('DISABLE_ALL_TODOS'):
            return {
                ...state,
                todoItems: state.todoItems.map(function (todo) {
                    todo.isChecked = false;
                    return todo;
                }),
            };
        case('SET_FILTER'):
            return {
                ...state,
                filter: action.filter,
            };
        default:
            return state;
    }
}

export default todoReducer;