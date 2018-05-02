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
store.dispatch(addComment(`Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.`));
store.dispatch(addUser('Donald J. Trump'));
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'));
