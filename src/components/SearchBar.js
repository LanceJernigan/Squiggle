import React from 'react'

const SearchBar = (props) => {

    return (

        <div className="search">

            <input className={'search__field' + (props.query.length ? ' search__field-active' : '')}type="text" value={props.query} placeholder="Search" onChange={ e => props.search(e.currentTarget.value) } />

        </div>

    )

}

export default SearchBar