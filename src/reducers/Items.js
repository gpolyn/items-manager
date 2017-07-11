const blah = (str, state, action) => {
  return state.map(item =>
    (item.get(str) === action[str]) 
      ? item.set('selected', !item.get('selected'))
      : item
  )
}

export const items = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_ITEM':
      return blah('id', state, action)
    default:
      return state
  }
}

export const categories = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_ITEM_CATEGORY':
      return blah('name', state, action)
    default:
      return state
  }
}

// trash
export const createToggle = () => {
  return (state = [], action) => {
    switch (action.type) {
      case `TOGGLE_ITEM`:
        return blah('id', state, action)
      case `TOGGLE_ITEM_CATEGORY`:
        return blah('name', state, action)
      default:
        return state
    }
  }
}
