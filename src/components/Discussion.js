import React from 'react'

import MemberLinks from '../containers/MemberLinks'
import ProjectNotification from './ProjectNotification'

const Discussion = ({particle, single, navigate}) => {

    return (

        <div className="discussion" onClick={() => navigate(particle.classification, particle.id)}>

            <div className="discussion__header">

                <h3 className="discussion__title">{particle.title}</h3>

                <h4 className="discussion__posted">{particle.subject}</h4>

            </div>

            <div className="discussion__content">

                <div className="discussion__author">

                    {/*<MemberLinks data={[props.messages[0].author]} />*/}

                </div>

                <p className="discussion__update">{particle.description}</p>

            </div>

            <div className="discussion__footer">

                {/*<ProjectNotification count={props.members.length} component={MemberLinks} data={props.members || []} />*/}

            </div>

        </div>

    )

}

export default Discussion