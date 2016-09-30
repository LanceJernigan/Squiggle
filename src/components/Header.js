import React from 'react'

import Search from '../containers/Search'

require('../style/Header.scss')

const {Component} = React

class Header extends Component {

    render() {

        return (

            <div className="header" style={this.props.styles}>

                <div className="header__left">

                    {this.props.left}

                </div>

                <div className="header__center">

                    {this.props.middle}

                </div>

                <div className="header__right">

                    {this.props.right}

                </div>

            </div>

        )

    }

}

export default Header