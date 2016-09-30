import React from 'react'

const {Component} = React

const List = (props) => {

    return (

        <div className={props.className || ''}>

            {props.data.map( d => React.createElement(props.component, {...d, ...props, className: props.childClass ? props.childClass : '', key: d.id}))}

        </div>

    )

}

export default List