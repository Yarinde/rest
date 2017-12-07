import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TodoApp from './main';
import todoReducer from './todoReducer';

let store = createStore(todoReducer);

render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('todoApp')
);