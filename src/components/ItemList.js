import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ItemList = ({ items, onItemClick }) => {
  console.log(items);

  return (
    <div className='container-fluid'>
      {items.map(item =>
        <Item
          key={item.id}
          {...item}
          onClick={() => onItemClick(item.id)}
        />
      )}
    </div>
  )

}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    selected: PropTypes.bool,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    stocked: PropTypes.bool,
    category: PropTypes.string,
    price: PropTypes.number.isRequired
  }).isRequired).isRequired,
  // onItemClick: PropTypes.func.isRequired
}

export default ItemList
