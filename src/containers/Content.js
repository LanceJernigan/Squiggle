import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import Discussion from '../components/Discussion'
import Director from '../components/Director'

const mapStateToProps = (state, props) => {

    const particles = state.particles.table.filter( particle => ((particle.type === (props.params.component ? props.params.component : 'project')) && ((particle.parent === (props.params.id ? parseInt(props.params.id) : 0)) || (particle.id === (props.params.id ? parseInt(props.params.id) : 0)))) )

    return {
        particles: particles,
        navigate: (component, id) => browserHistory.push('/' + component + '/' + id)
    }

}

const Projects = connect(mapStateToProps)(Director)

export default Projects