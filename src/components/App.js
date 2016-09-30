import React from 'react'
import {render} from 'react-dom'

import Projects from '../containers/Projects'

require('../style/App.scss')

const {Component} = React

class App extends Component {

    render() {


        return (

            <div className="app">

                <div className="content">

                    {this.props.children}

                </div>

            </div>

        )
    }

}

export default App