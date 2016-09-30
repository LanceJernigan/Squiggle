const search = (state = {}, action) => {

    switch (action.type) {

        case 'FILTER_SEARCH_PROJECT':

            return {
                ...state,
                query: action.query
            }

        default:

            return state

    }

}

export default search
