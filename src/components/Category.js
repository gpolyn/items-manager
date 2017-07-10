import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'reactstrap';

const Category = ({ onClick, selected, name }) => {

  const selectionColor = selected === true ? "primary" : "secondary"; 

  return <Button 
    onClick={onClick}
    color={selectionColor}
    >
    {name}
  </Button>
}

Category.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  name: PropTypes.string.isRequired,
}

export default Category;
