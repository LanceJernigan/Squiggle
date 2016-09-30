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

export const addItem = (type, data) => ({
    type: 'ADD_' + type.toUpperCase(),
    data: data
})

export const toggleProject = (id) => ({
    type: 'TOGGLE_PROJECT',
    id: parseInt(id)
})

export const toggleDiscussion = (id) => ({
    type: 'TOGGLE_PROJECT',
    id: parseInt(id)
})

export const search = (query) => ({
    type: 'FILTER_SEARCH_PROJECT',
    query: query
})