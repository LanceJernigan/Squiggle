const requestParticles = () => ({
    type: 'REQUEST_PARTICLES'
})

const receiveParticles = (particles) => ({
    type: 'RECEIVE_PARTICLES',
    particles: particles,
    timestamp: Date.now()
})

export const fetchParticles = ({classification = 'project', id = 0, offset = 0, limit = 5}) => {

    return (dispatch) => {

        const url = classification === 'ALL' ?
            'http://localhost:3000/particles?parent=' + id + '&_start=' + offset + '&_end=' + (offset + limit) :
            'http://localhost:3000/particles?classification=' + classification + '&_start=' + offset + '&_end=' + (offset + limit)

        dispatch(requestParticles())

        return fetch(url)
            .then(response => response.json())
            .then(json => {

                dispatch(receiveParticles(json))

            })
            .catch(err => console.log(err))

    }

}

export const toggleProject = (id) => ({
    type: 'TOGGLE_PROJECT',
    id: parseInt(id)
})

export const toggleDiscussion = (id) => ({
    type: 'TOGGLE_PROJECT',
    id: parseInt(id)
})

export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    id: parseInt(id)
})

export const search = (query) => ({
    type: 'FILTER_SEARCH_PROJECT',
    query: query
})