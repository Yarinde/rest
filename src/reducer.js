function reducer(state = [], action) {
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
        case('GET_DEFAULT_LOCATIONS'):
            return {
                ...state,
                locations: [...action.payload]};
                // selectedLocation: action.payload[0].id};
        case('CHANGE_LOCATION'):
            return {
                ...state,
                selectedLocation: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;