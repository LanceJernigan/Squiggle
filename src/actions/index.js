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

export const requestParticles = () => ({
    type: 'REQUEST_PARTICLES'
})

export const receiveParticles = (particles) => ({
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