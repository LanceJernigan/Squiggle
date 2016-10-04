import React from 'react'

import MemberLinks from '../containers/MemberLinks'
import ProjectNotification from './ProjectNotification'
import TodoList from '../containers/TodoList'

require('../style/Todo.scss')

const Todo = (props) => {

    return (

        <div className="todo">

            <div className="todo__header">

                <h3 className="todo__title">{props.title}</h3>

                <h4 className="todo__posted">{props.dueDate ? props.dueDate : ''}</h4>

            </div>

            <div className="todo__content">

                <TodoList tasks={props.tasks} />

            </div>

            <div className="todo__footer">

                {/*<ProjectNotification count={props.members.length} component={MemberLinks} data={props.members || []} />*/}

            </div>

        </div>

    )

}

export default Todo