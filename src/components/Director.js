import React from 'react'
import Project from './Project'
import Discussion from './Discussion'

const atoms = {
    project: () => {

        require('../style/Project.scss')

        return Project

    },
    discussion: () => {

        require('../style/Discussion.scss')

        return Discussion

    }
}

const Director = ({particles, navigate}) => {

    return (

        <div className="director">

            {

                particles.map( particle => React.createElement(atoms[particle.classification](), {particle: particle, single: (particles.length === 1), navigate: navigate, key: particle.classification + '_' + particle.id}) )

            }

        </div>

    )

}

export default Director