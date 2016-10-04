import React from 'react'

const TodoTask = (task) => {

    return (

        <div className={'todoTask' + (task.complete ? ' todoTask-complete' : '')} onClick={() => task.toggleComplete(task.id)}>

            <div className="todoTask__check">

                <input type="checkbox" checked={task.complete} />

            </div>

            <div className="todoTask__title">

                <h5>{task.title}</h5>

            </div>

        </div>

    )

}

export default TodoTask