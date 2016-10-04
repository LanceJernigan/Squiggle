import React from 'react'

import Project from './Project'

const atoms = {
    project: () => {

        require('../style/Project.scss')

        return Project

    },
}

const Director = ({particles, navigate}) => {

    return (

        <div className="director">

            {

                particles.map( particle => React.createElement(atoms[particle.type](), {particle: particle, single: (particles.length === 1), navigate: navigate, key: particle.type + '_' + particle.id}) )

            }

        </div>

    )

}

export default Director