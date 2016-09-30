import React from 'react'

require('../style/ProjectNotification.scss')

const ProjectNotification = ({count = 0, component, icon, data}) => {

    return (

        <div className="projectNotification">

            <div className="projectNotification__icon">

                <img src={icon} />

            </div>

            <div className="projectNotification__divider">



            </div>

            <div className="projectNotification__count">

                <p>{count}</p>

            </div>

            {
                count ? (

                    <div className="projectNotification__overlay">

                        {React.createElement(component, {data: data})}

                    </div>

                ) : ''


            }

        </div>

    )

}

export default ProjectNotification