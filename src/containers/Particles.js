import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import {fetchParticles} from '../actions'

import Discussion from '../components/Discussion'
import Director from '../components/Director'

const mapDispatchToProps = (dispatch, props) => ({

    navigate: (classification, id) => {

        dispatch(fetchParticles({classification: 'ALL', id: id, limit: 10}))

        browserHistory.push('/' + classification + '/' + id)

    }

})

const mapStateToProps = (state, props) => {

    const id = parseInt(props.params.id) || 0
    const classification = props.params.classification || 'project'
    const particles = state.particles.table.filter( particle => {

        return (

            classification !== 'ALL' ?
                particle.classification === classification ?
                    particle.parent === id || particle.id === id :
                    false
                : particle.parent === id

        )

    })

    return {
        particles: particles,
    }

}

const Particles = connect(mapStateToProps, mapDispatchToProps)(Director)

export default Particles