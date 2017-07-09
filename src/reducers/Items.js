const items = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_ITEM':
      return state.map(item =>
        (item.id === action.id) 
          ? {...item, selected: !item.selected}
          : item
      )
    default:
      return state
  }
}

export default items
