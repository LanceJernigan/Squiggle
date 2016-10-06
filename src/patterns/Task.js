import React from 'react'

const Task = ({particle}) => {

    return (

        <div className={'todoTask' + (particle.complete ? ' todoTask-complete' : '')} onClick={() => particle.toggleComplete(particle.id)}>

            <div className="todoTask__check">

                <input type="checkbox" checked={particle.complete} />

            </div>

            <div className="todoTask__title">

                <h5>{particle.title}</h5>

            </div>

        </div>

    )

}

export default Task