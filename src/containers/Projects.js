import React from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'

import ProjectPreview from '../components/ProjectPreview'
import List from '../components/List'

import {toggleProject} from '../actions'

//require('../style/Projects.scss')

const filterProjects = (state, action = {type: 'default'}) => {

    const lookup = {

        single: () => state.filter( project => project.id === parseInt(action.projectID)),

        search: () => state.filter( project => (project.title.indexOf(action.query) >= 0 || project.content.subject.indexOf(action.query) >= 0 || project.content.description.indexOf(action.query) >= 0)),

        default: () => state.filter( project => project.visible !== false)

    }

    return lookup[action.type]()

}

const mapDispatchToProps = (dispatch, props) => ({

    toggleActive: (id) => {

        browserHistory.push('/projects/' + id)

    }

})

const mapStateToProps = (state, props) => {

    return ({
        data: state.particles.items.filter(particle => particle.type === 'project'),
        component: ProjectPreview,
        className: 'projects'
    })

}

const Projects = connect(mapStateToProps, mapDispatchToProps)(List)

export default Projects
