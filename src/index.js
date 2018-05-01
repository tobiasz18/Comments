import React from 'react';
import ReactDOM from 'react-dom';
//reducers react
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer.js'
import { addComment } from './actions/comments.js'
import { addUser } from './actions/users.js'

import App from './components/App.js';

import DevTools from './DevTools'

const store = createStore(reducer, DevTools.instrument());
store.dispatch(addComment(`Lorem Ipsum is simply dummy text of the printing and typesetting industry :))
Lorem Ipsum is simply dummy text of the printing and typesetting industry :))
Lorem Ipsum is simply dummy text of the printing and typesetting industry :))
Lorem Ipsum is simply dummy text of the printing and typesetting industry :))
Lorem Ipsum is simply dummy text of the printing and typesetting industry :))

`));
store.dispatch(addUser('Tobi1512'));
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'));
