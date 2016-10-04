import React from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'

import TodoTask from '../components/TodoTask'
import List from '../components/List'

import {toggleTask} from '../actions'

//require('../style/Projects.scss')

const mapDispatchToProps = (dispatch, props) => ({

    toggleComplete: (id) => {

        dispatch(toggleTask(id))

    }

})

const mapStateToProps = (state, props) => {

    return ({
        data: props.tasks,
        component: TodoTask,
        className: 'todoTasks'
    })

}

const TodoList = connect(mapStateToProps, mapDispatchToProps)(List)

export default TodoList
