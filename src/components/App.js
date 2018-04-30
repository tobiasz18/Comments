import React, { Component } from 'react';
import MainContainer from './containers/mainContainer.js'
import DevTools from '../DevTools'
require('../stylesheet/main.scss');

class App extends Component {
    render () {
        return (
            <div className="App">
                <MainContainer />

            </div>
        )
    }
}

export default App;
            /*    <DevTools />*/
