import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './components/App'
import Content from './components/Content'
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
                <IndexRoute component={Content} />
                <Route path="/:classification/:id" component={Content} />
            </Route>
        </Router>
    </Provider>,

    document.getElementById('app')

)