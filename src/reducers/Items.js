export const items = (state = [], action) => {
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

export const categories = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_ITEM_CATEGORY':
      return state.map(item =>
        (item.get('name') === action.name) 
          ? item.set('selected', !item.get('selected'))
          : item
      )
    default:
      return state
  }
}

// http://redux.js.org/docs/recipes/reducers/ReusingReducerLogic.html
export const createToggleWithNamedType = (name = '') => {
  return (state = [], action) => {
    switch (action.type) {
      case `TOGGLE_${name}`:
        return state.map(item =>
          (item.get('id') === action.id) 
            ? item.set('selected', !item.get('selected'))
            : item
        )
      default:
        return state
    }
  }
}
