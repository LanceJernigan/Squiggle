const initialState = {
    projects: []
}

const discussions = (state = [], action) => {

    switch (action.type) {

        case 'ADD_DISCUSSION':

            return [
                ...state,
                action.data
            ]

        default:

            return state

    }

}

export default discussions
