import React from 'react'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'

import Post from '../components/Post'
import List from '../components/List'

require('../style/Posts.scss')

const mapStateToProps = (state, props) => {

    return ({
        data: props.posts,
        component: Post,
        className: 'posts',
        childClass: 'post'
    })

}

const MemberLinks = connect(mapStateToProps)(List)

export default MemberLinks
