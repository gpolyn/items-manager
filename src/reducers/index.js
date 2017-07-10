import { combineReducers } from 'redux'
import { items, categories as myCategories} from './Items'

const todoApp = combineReducers({
  items : items,
  categories : myCategories
})

export const confirm = state => { return {todos: state.items, cats: state.categories}}

export const categories = items => [...new Set(items.map(item => item.get('category')))] 
export default todoApp
