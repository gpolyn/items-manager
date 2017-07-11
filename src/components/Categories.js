import React from 'react'
import PropTypes from 'prop-types'
import Category from './Category'
import ImmutablePropTypes from 'react-immutable-proptypes';

const CategoryList = ({ categories, onCategoryClick }) => {
  return (
    <div className='container-fluid'>
      {categories.map(item =>
        <Category
          key={item.get('name')}
          name={item.get('name')}
          selected={item.get('selected')}
          onClick={() => onCategoryClick(item.get('name'))}
        />
      )}
    </div>
  )

}
          // selected={item.get('selected')}

CategoryList.propTypes = {
  categories: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
    selected: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onCategoryClick: PropTypes.func.isRequired
}

export default CategoryList
