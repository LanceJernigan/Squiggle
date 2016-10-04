import React from 'react'
require('../style/App.scss')

const App = (props) => {

    return (

        <div className="app">

            <div className="content">

                {props.children}

            </div>

        </div>

    )

}

export default App