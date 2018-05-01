import React, { Component } from 'react';
import MainContainer from './containers/mainContainer.js'
import DevTools from '../DevTools'
require('../stylesheet/main.scss');
    // <DevTools />   //we dont need this to style
class App extends Component {
    render () {
        return (
            <div className="App">
                <MainContainer />
                <a href="https://icons8.com">Icon pack by Icons8</a>
            </div>
        )
    }
}

export default App;
