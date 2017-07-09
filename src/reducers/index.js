import { combineReducers } from 'redux'
import items from './Items'
//import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  items
})

export default todoApp
