import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './components/App'
import Particles from './containers/Particles'
import reducer from './reducers'

import {fetchParticles} from './actions'

const {Component} = React
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.dispatch(fetchParticles('project', {}))
store.dispatch(fetchParticles('project', {}))

render(

    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Particles} />
                <Route path="/:classification/:id" component={Particles} />
            </Route>
        </Router>
    </Provider>,

    document.getElementById('app')

)