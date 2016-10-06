import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import {fetchParticles} from '../actions'

import Accelerator from '../components/Accelerator'
import Pattern from '../components/Pattern'

const mapDispatchToProps = (dispatch, props) => ({

    navigate: (classification, id) => {

        dispatch(fetchParticles({classification: 'ALL', id: id, limit: 10}))

        browserHistory.push('/' + classification + '/' + id)

    }

})

const mapStateToProps = (state, {id = 0, classification = 'ALL', children}) => {

    const particles = state.particles.table.filter( particle => {

        return (

            classification !== 'ALL' ?
                particle.classification === classification ?
                    particle.parent === parseInt(id) || particle.id === parseInt(id) :
                    false
                : particle.parent === parseInt(id)

        )

    })

    return {
        particles: particles,
        patterns: Array.isArray(children) ? children : [children],
        single: particles.length == 1
    }

}

const Particles = connect(mapStateToProps, mapDispatchToProps)(Accelerator)

export default Particles