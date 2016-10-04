import React from 'react'
import {connect} from 'react-redux'

import ProjectFull from '../components/ProjectFull'

require('../style/ProjectFull.scss')

const filterProjects = (projects, id) => projects.filter( project => project.id == id).shift()

const mapStateToProps = (state, props) => {

    return ({
        project: state.particles.items.filter(particle => particle.id === parseInt(props.params.projectID)).shift(),
    })

}

const MemberLinks = connect(mapStateToProps)(ProjectFull)

export default MemberLinks
