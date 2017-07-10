import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';

import { FilterableProductTable, PRODUCTS, CATEGORIES } from './ReactstrApp';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import reducer, {categories} from './reducers'
import { fromJS } from 'immutable';

const store = createStore(reducer,{
  categories: fromJS(categories(PRODUCTS).map(product => { return {name: product, selected: true}})),
  items: PRODUCTS
})

ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
