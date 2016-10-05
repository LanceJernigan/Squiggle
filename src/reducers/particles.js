//const project = (state, action) => {
//
//    switch (action.type) {
//
//        case 'TOGGLE_ACTIVE':
//
//            return {
//                ...state,
//                active: state.id === action.id,
//                visible: state.id === action.id
//            }
//
//        default:
//
//            return state
//
//    }
//
//}

const initialState = {
    isFetching: false,
    table: []
}

const particles = (state = initialState, action) => {

    switch (action.type) {

        case 'REQUEST_PARTICLES':

            return Object.assign({}, state, {
                isFetching: true
            })

        case 'RECEIVE_PARTICLES':

            return Object.assign({}, state, {
                isFetching: false,
                table: [
                    ...state.table,
                    ...action.particles.filter(particle => state.table.reduce((pre, curr) => {
                        pre[pre.length] = curr.id
                        return pre
                    }, []).indexOf(particle.id) == -1)
                ],
                timestamp: action.timestamp
            })

        //
        //case 'TOGGLE_ACTIVE':
        //
        //    return state.map( p => project(p, action) )

        default:

            return state

    }

}

export default particles
