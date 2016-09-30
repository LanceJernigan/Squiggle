import React from 'react'

import Projects from '../containers/Projects'
import Header from '../components/Header'
import Search from '../containers/Search'

const ProjectsList = () => {

    return (

        <div className="projectsList">

            <Header middle={<Search />} />

            <Projects />

        </div>

    )

}

export default ProjectsList