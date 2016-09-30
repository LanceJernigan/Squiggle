import React from 'react'
import {render} from 'react-dom'
import faker from 'faker'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './components/App'
import ProjectsList from './components/ProjectsList'
import Project from './containers/Project'
import reducer from './reducers'

import {addItem} from './actions'

const {Component} = React
const store = createStore(reducer)

const _database = {
    attachments: [],
    discussions: [],
    messages: [],
    members: [],
    projects: [],
    get: (key = 'projects', {count = 5, offset = 0, where = [], compare = 'AND'}) => where.length ? _database[key].filter( obj => where.reduce((pre, curr) => compare === 'AND' ? pre === false ? pre : obj[curr.key] === curr.value : pre === true ? pre : obj[curr.key] === curr.value , null)).slice(offset, offset + count ) : _database[key].slice(offset, offset + count),
    add: (key = 'projects', data = []) => data.filter( d => _database[key].push(d) ),
    edit: (key = 'projects', data = []) => data.map( d => Utils.mergeObjects(_database.get(key, {id: d.id}).pop(), d) ),
}

/* Database Setup */

for (let p = 0; p < 5; p++) {

    let project = {
        title: faker.commerce.productName(),
        id: p,
        members: [0, 2, 4],
        color: faker.internet.color(),
        content: {
            subject: faker.lorem.sentence(Math.floor(Math.random() * 6) + 3, 7),
            description: faker.lorem.paragraph(Math.floor(Math.random() * 3) + 1)
        }
    }

    store.dispatch(addItem('project', project))

}

for (let d = 0; d < 15; d++) {

    let discussion = {
        id: d,
        parent: faker.random.number(5),
        title: faker.lorem.words(Math.floor(Math.random() * 6) + 3),
        content: {
            subject: faker.lorem.sentence(Math.floor(Math.random() * 6), 7),
            description: faker.lorem.paragraph(Math.floor(Math.random() * 3) + 1)
        }
    }

    store.dispatch(addItem('discussion', discussion))

}

for (let msg = 0; msg < 45; msg++) {

    let message = {
        type: 'text',
        id: msg,
        content: faker.lorem.paragraph(Math.floor(Math.random() * 3) + 1),
        author: faker.random.number(5),
        parent: faker.random.number(15)
    }

    store.dispatch(addItem('message', message))

}

for (let mem = 0; mem < 5; mem++) {

    let member = {
        fname: faker.name.firstName(),
        lname: faker.name.lastName(),
        id: mem,
        avatar: faker.image.avatar(),
    }

    store.dispatch(addItem('member', member))

}



render(

    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ProjectsList}/>
                <Route path="/projects/:projectID" component={Project} />
                    <Route path="/discussions/:discussionID" component={Project} />
            </Route>
        </Router>
    </Provider>,

    document.getElementById('app')

)