import React from 'react';
import PropTypes from 'prop-types'
import { CardTitle, CardSubtitle, Card, CardBlock, Button } from 'reactstrap';

const Item = ({ onClick, selected, name, price }) => {

  const selectionColor = selected === true ? "primary" : "secondary"; 

  return <Button 
    onClick={onClick}
    color={selectionColor}
    >
    <Card>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>${price}</CardSubtitle>
    </Card>
  </Button>
}

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  stocked: PropTypes.bool,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Item;
