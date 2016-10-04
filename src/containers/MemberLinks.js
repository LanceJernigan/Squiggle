import React from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'

import MemberLink from '../components/MemberLink'
import List from '../components/List'

require('../style/MemberLinks.scss')

const filterMembers = (members, projectMembers) => members.filter( member => projectMembers.indexOf(member.id) >= 0 )

const mapStateToProps = (state, props) => {

    return ({
        data: filterMembers(state.members, props.data),
        component: MemberLink,
        className: 'memberLinks'
    })

}

const MemberLinks = connect(mapStateToProps)(List)

export default MemberLinks
