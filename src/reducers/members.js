const members = (state = [], action) => {

    switch (action.type) {

        case 'ADD_MEMBER':

            return [
                ...state,
                action.data
            ]

        default:

            return state

    }

}

export default members
