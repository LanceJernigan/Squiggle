import React from 'react'
import {connect} from 'react-redux'

import SearchBar from '../components/SearchBar'

import {search} from '../actions'

require('../style/SearchBar.scss')

const mapDispatchToProps = (dispatch, props) => ({
    search: (query) => dispatch(search(query))
})

const mapStateToProps = (state, props) => {

    return ({
        query: state.search.query || ''
    })

}

const Search = connect(mapStateToProps, mapDispatchToProps)(SearchBar)

export default Search
