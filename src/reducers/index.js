import { combineReducers } from 'redux'

import projects from './projects'
import members from './members'
import search from './search'

const PM = combineReducers({
    projects,
    members,
    search
})

export default PM