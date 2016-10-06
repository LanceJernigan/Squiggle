import React from 'react'

import Task from '../patterns/Task'

require('../style/Todo.scss')

const Todo = ({particle}) => {

    return (

        <div className="todo">

            <div className="todo__header">

                <h3 className="todo__title">{particle.title}</h3>

                <h4 className="todo__posted">{particle.dueDate ? particle.dueDate : ''}</h4>

            </div>

            <div className="todo__content">

                <Particles classification="task" id={particle.id}>
                    <Pattern classification="task" component={Task} />
                </Particles>

            </div>

            <div className="todo__footer">

                {/*<ProjectNotification count={props.members.length} component={MemberLinks} data={props.members || []} />*/}

            </div>

        </div>

    )

}

export default Todo