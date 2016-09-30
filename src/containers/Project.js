import React from 'react'
import {connect} from 'react-redux'

import ProjectFull from '../components/ProjectFull'

require('../style/ProjectFull.scss')

const filterProjects = (projects, id) => projects.filter( project => project.id == id).shift()

const mapStateToProps = (state, props) => {

    return ({
        project: filterProjects(state.projects, props.params.projectID),
    })

}

const MemberLinks = connect(mapStateToProps)(ProjectFull)

export default MemberLinks
