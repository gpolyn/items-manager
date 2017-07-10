import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

const ItemList = ({ items, onItemClick }) => {

  return (
    <div className='container-fluid'>
      {items.map(item =>
        <Item
          key={item.get('id')}
          price={item.get('price')}
          category={item.get('category')}
          id={item.get('id')}
          name={item.get('name')}
          onClick={() => onItemClick(item.get('id'))}
          selected={item.get('selected')}
        />
      )}
    </div>
  )

}

ItemList.propTypes = {
  items: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
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
