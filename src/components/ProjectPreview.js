import React from 'react'
import MemberLinks from '../containers/MemberLinks'
import ProjectNotification from '../components/ProjectNotification'

const {Component} = React

const ProjectPreview = (props) => {

    return (

        <div className={'project' + ((typeof props.active !== 'undefined' && props.active) ? ' project-active' : '')} onClick={() => props.toggleActive(props.id)}>

            <div className="project__title" style={{background: props.color}}>

                <h1 className="project__name">{props.title}</h1>

                <h5 className="project__subject">{props.content.subject}</h5>

            </div>

            <div className="project__content">

                <p className="project__description">{props.content.description}</p>

            </div>

            <div className="project__footer">

                <ProjectNotification count={props.members.length} component={MemberLinks} data={props.members || []} />

                <ProjectNotification count={0} component={MemberLinks} data={[]} />

            </div>

        </div>

    )

}

export default ProjectPreview