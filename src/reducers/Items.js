const items = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_ITEM':
      return state.map(item =>
        (item.get('id') === action.id) 
          ? item.set('selected', !item.get('selected'))
          : item
      )
    default:
      return state
  }
}

export default items
