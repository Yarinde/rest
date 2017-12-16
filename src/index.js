import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ForecastApp from './main';
import reducer from './reducer';

let store = createStore(reducer);

render(
    <Provider store={store}>
        <ForecastApp />
    </Provider>,
    document.getElementById('todoApp')
);