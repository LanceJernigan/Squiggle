import React from 'react'

import Header from './Header'

import Discussion from './Discussion'
import Todo from './Todo'
import Particles from '../containers/Particles'

const Project = ({particle, single = false, navigate}) => {

    return (

        <div className={'project' + (single ? ' project-active' : ' project-card') } onClick={!single ? () => navigate(particle.classification, particle.id) : ''}>

            {/*<Header styles={{backgroundColor: particle.state.color}} />*/}

            <div className="project__splash" style={{backgroundColor: particle.state.color}}>

                <div className="project__lead">

                    <div className="project__title" style={{backgroundColor: particle.state.color}}>

                        <h1 className="project__name">{particle.title}</h1>

                        <h3 className="project__subject">{particle.subject}</h3>

                    </div>

                    <h5 className="project__description">{particle.content}</h5>

                </div>

            </div>

            <div className="project__content">

                <h1 className="project__heading">All</h1>

                {
                    single ? <Particles params={{classification: 'ALL', id: particle.id}} /> : ''
                }

            </div>

        </div>

    )

}

export default Project