import React, { Component } from 'react';
import MainContainer from './containers/mainContainer.js'
import '../style.scss'
import DevTools from '../DevTools'

class App extends Component {
    render () {
        return (
            <div>
                <DevTools />
                <MainContainer />
            </div>
        )
    }
}

export default App;
