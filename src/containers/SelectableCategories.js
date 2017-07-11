import { connect } from 'react-redux'
import { toggleItemCategory } from '../actions'
import Categories from '../components/Categories'

const SelectableCategories = connect(
  (state) => { return state },
  { onCategoryClick: toggleItemCategory }
)(Categories)

export default SelectableCategories;
