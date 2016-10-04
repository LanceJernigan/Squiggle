import React from 'react'

const Post = (props) => {

    return (

        <div className="post">

            {React.createElement(props.display, {...props})}

        </div>

    )

}

export default Post