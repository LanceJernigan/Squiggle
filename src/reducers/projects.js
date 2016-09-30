const project = (state, action) => {

    switch (action.type) {

        case 'TOGGLE_PROJECT':

            return {
                ...state,
                active: state.id === action.id,
                visible: state.id === action.id
            }

        case 'FILTER_SEARCH_PROJECT':

            let query = action.query.toLowerCase()

            return {
                ...state,
                visible: (state.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 || state.content.subject.toLowerCase().indexOf(query.toLowerCase()) >= 0 || state.content.description.toLowerCase().indexOf(query.toLowerCase()) >= 0)
            }

        default:

            return state

    }

}

const projects = (state = [], action) => {

    switch (action.type) {

        case 'ADD_PROJECT':

            return [
                ...state,
                action.data
            ]

        case 'TOGGLE_PROJECT':

            return state.map( p => project(p, action) )

        case 'FILTER_SEARCH_PROJECT':

            return state.map( p => project(p, action) )

        default:

            return state

    }

}

export default projects
