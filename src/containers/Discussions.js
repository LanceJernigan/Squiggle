import React from 'react'
import {connect} from 'react-redux'

import Discussion from '../components/Discussion'
import List from '../components/List'

import {toggleProject} from '../actions'

//require('../style/Projects.scss')

const mapDispatchToProps = (dispatch, props) => ({
    toggleActive: (id) => dispatch(toggleProject(id))
})

const mapStateToProps = (state) => ({
    data: state.discussionsd.sort((a, b) => a.title === b.title ? 0 : a.title < b.title ? -1 : 1),
    component: Discussion
})

const Projects = connect(mapStateToProps, mapDispatchToProps)(List)

export default Projects