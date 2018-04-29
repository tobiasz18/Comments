import React from 'react';
import ReactDOM from 'react-dom';
//reducers react
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer.js'

import App from './components/App.js';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'));
