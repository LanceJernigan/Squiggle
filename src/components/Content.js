import React from 'react'

import Particles from '../containers/Particles'
import Pattern from './Pattern'
import Project from '../patterns/Project'
import Discussion from '../patterns/Discussion'
import DiscussionExpanded from '../patterns/DiscussionExpanded'

const Content = ({params = {id: 0, classification: 'ALL'}}) => {

    return (

        <Particles id={params.id} classification={params.classification}>
            <Pattern classification="project" component={Project} />
            <Pattern classification="discussion" component={Discussion} expanded={DiscussionExpanded} />
        </Particles>

    )

}

export default Content