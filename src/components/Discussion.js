import React from 'react'

import MemberLinks from '../containers/MemberLinks'
import ProjectNotification from './ProjectNotification'

require('../style/Discussion.scss')

const Discussion = (props) => {

    return (

        <div className="discussion">

            <div className="discussion__header">

                <h3 className="discussion__title">{props.messages[0].title}</h3>

                <h4 className="discussion__posted">{props.messages[0].posted}</h4>

            </div>

            <div className="discussion__content">

                <div className="discussion__author">

                    {/*<MemberLinks data={[props.messages[0].author]} />*/}

                </div>

                <p className="discussion__update">{props.messages[0].content}</p>

            </div>

            <div className="discussion__footer">

                {/*<ProjectNotification count={props.members.length} component={MemberLinks} data={props.members || []} />*/}

            </div>

        </div>

    )

}

export default Discussion