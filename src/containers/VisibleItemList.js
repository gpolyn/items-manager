import { connect } from 'react-redux'
import { toggleItem } from '../actions'
import ItemList from '../components/ItemList'

const getVisibleItems = (state, filter) => {
  const { items, categories } = state;
  const selectedCategories = categories.filter(category => { return category.get('selected');})
  console.log(selectedCategories.toJSON());
  const filteredItems = items.filter(item => {
    const idx = selectedCategories.findIndex( cat => cat.get('name') === item.get('category'))
    if (idx > -1) {
      return item;
    }
  })
  console.log('filteredItems', filteredItems.toJSON())
  switch (filter) {
    case 'SHOW_ALL':
      return filteredItems
    case 'SHOW_SELECTED':
      return items.filter(t => t.selected)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  // items: getVisibleItems(state.items, state.visibilityFilter)
  items: getVisibleItems(state, 'SHOW_ALL')
})

const mapDispatchToProps = {
  onItemClick: toggleItem
}

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default VisibleItemList;
