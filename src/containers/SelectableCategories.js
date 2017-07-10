import { connect } from 'react-redux'
import { toggleItemCategory } from '../actions'
import Categories from '../components/Categories'

const mapStateToProps = (state) => {
  console.log(state);
  return state;
  /*
  return {
    categories: state
  }
  */
}

const mapDispatchToProps = {
  onCategoryClick: toggleItemCategory
}

const SelectableCategories = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)

export default SelectableCategories;
