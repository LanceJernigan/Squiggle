import React from 'react'

import Pattern from '../components/Pattern'

require('../style/Accelerator.scss')

const Accelerator = ({particles, patterns = [], navigate, single = false}) => {

    return (

        <div className='accelerator'>

            {particles.map( particle => {

                const pattern = patterns.filter( ({props}) => props.classification === particle.classification ).shift()
                const component = pattern ? pattern.props.expanded ? pattern.props.expanded : pattern.props.component : Pattern

                return React.createElement(component, {particle: particle, single: single, navigate: navigate, key: particle.id})

            })}

        </div>

    )

}


export default Accelerator