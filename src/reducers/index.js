import { combineReducers } from 'redux'
import { items, categories as myCategories } from './Items'

const app = combineReducers({
  items : items,
  categories : myCategories
})

export const categories = items => [...new Set(items.map(item => item.get('category')))] 

export default app
