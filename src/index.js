import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FilterableProductTable, PRODUCTS } from './ReactstrApp';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);
registerServiceWorker();
