import React from 'react'
import MemberLinks from '../containers/MemberLinks'
import ProjectNotification from '../components/ProjectNotification'

const {Component} = React

const ProjectPreview = (particle) => {

    return (

        <div className={'project'} onClick={() => particle.toggleActive(particle.id)}>

            <div className="project__title" style={{background: particle.state.color}}>

                <h1 className="project__name">{particle.title}</h1>

                <h5 className="project__subject">{particle.subject}</h5>

            </div>

            <div className="project__content">

                <p className="project__description">{particle.content}</p>

            </div>

            <div className="project__footer">

                {/*<ProjectNotification count={props.members.length} component={MemberLinks} data={props.members || []} />

                <ProjectNotification count={0} component={MemberLinks} data={[]} />*/}

            </div>

        </div>

    )

}

export default ProjectPreview