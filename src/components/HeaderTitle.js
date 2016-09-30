import React from 'react'

require('../style/HeaderTitle.scss')

const HeaderTitle = ({title = '', subtitle = ''}) => {

    return (

        <div className="headerTitle">

            <h1>{title}</h1>

            <h3>{subtitle}</h3>

        </div>

    )

}

export default HeaderTitle