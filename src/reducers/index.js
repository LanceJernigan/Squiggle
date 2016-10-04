import { combineReducers } from 'redux'

import particles from './particles'
import search from './search'

const squiggle = combineReducers({
    particles,
    search
})

export default squiggle