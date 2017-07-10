import React from 'react'
import VisibleItemList from '../containers/VisibleItemList'
import SelectableCategories from '../containers/SelectableCategories'

const App = () => (
  <div>
    <div>
      <SelectableCategories />
    </div>
    <div>
      <VisibleItemList />
    </div>
  </div>
)

export default App
