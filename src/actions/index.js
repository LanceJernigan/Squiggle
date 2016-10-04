//
//constructor(props) {
//
//    super(props)
//
//    this.state = {
//        projects: _database.get('projects', {}),
//        totalProjects: _database.projects.length
//    }
//
//    this.loadProjects = this.loadProjects.bind(this)
//    this.loadDiscussions = this.loadDiscussions.bind(this)
//
//}
//
//loadProjects() {
//
//    this.setState({
//        projects: [
//            ...this.state.projects,
//            ..._database.get('projects', {offset: this.state.projects.length})
//        ]
//    })
//
//}
//
//loadDiscussions(id) {
//
//    this.setState({
//
//        projects: this.state.projects.map( (project) => {
//
//            if (project.id === id) {
//
//                project.discussions = _database.get('discussions', {
//                    where: [{
//                        key: 'parent',
//                        value: id
//                    }]
//                })
//
//            }
//
//            return project
//
//        })
//
//    })
//
//}

export const requestParticles = (particleType, args) => ({
    type: 'REQUEST_PARTICLES',
    particleType: particleType,
    args: args
})

export const receiveParticles = (particles) => ({
    type: 'RECEIVE_PARTICLES',
    particles: particles,
    timestamp: Date.now()
})

export const fetchParticles = (particleType = 'project', {offset = 0, limit = 5}) => {

    return (dispatch) => {

        dispatch(requestParticles(particleType, {offset, limit}))

        return fetch('http://localhost:3000/particles?type=' + particleType + '&_start=' + offset + '&_end=' + (offset + limit))
            .then(response => response.json())
            .then(json => {

                dispatch(receiveParticles(json))

            })

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