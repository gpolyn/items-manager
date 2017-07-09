import { connect } from 'react-redux'
import { toggleItem } from '../actions'
import ItemList from '../components/ItemList'

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'SHOW_SELECTED':
      return items.filter(t => t.selected)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  // items: getVisibleItems(state.items, state.visibilityFilter)
  items: getVisibleItems(state.items, 'SHOW_ALL')
})

const mapDispatchToProps = {
  onItemClick: toggleItem
}

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default VisibleItemList;
