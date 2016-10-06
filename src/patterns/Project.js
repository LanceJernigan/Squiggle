import React from 'react'

import Particles from '../containers/Particles'
import Pattern from '../components/Pattern'
import Discussion from '../patterns/Discussion'
import Todo from '../patterns/Todo'

require('../style/Project.scss')

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

            {
                single ?
                    <div className="project__content">

                        <h1 className="project__heading">All</h1>

                        <Particles id={particle.id}>
                            <Pattern classification="discussion" component={Discussion} />
                        </Particles>

                    </div> :
                    ''
            }

        </div>

    )

}

export default Project