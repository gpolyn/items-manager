import React, { Component } from 'react';
import { List, Map, Record } from 'immutable';
import { CardTitle, CardSubtitle, Card, CardBlock, Button } from 'reactstrap';

const ProductCategoryButton = (props, context) =>
	<Button size="sm">{props.category}</Button>

const ProductRow = (props, context) => {

	const name = props.product.stocked ?
		props.product.name :
		<span style={{color: 'red'}}>
			{props.product.name}
		</span>;

	return (
		<Button>
      <Card>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{props.product.price}</CardSubtitle>
      </Card>
		</Button>
	);
}

const ProductTable = (props, context) => {
    const rows = [];
    let lastCategory = null;
    props.products.forEach((product) => {
      if (product.get('name').indexOf(props.filterText) === -1 || (!product.get('stocked') && props.inStockOnly)) {
        return;
      }
      rows.push(<ProductRow product={product.toJS()} key={product.get('name')} />);
      lastCategory = product.category;
    });

    return (
      <div className='container-fluid'>
        {rows}
      </div>
    );
}

const SearchBar = (props, context) => {
  
  const handleFilterTextInputChange = (e) => {
    props.onFilterTextInput(e.target.value);
  }
  
  const handleInStockInputChange = (e) => {
    props.onInStockInput(e.target.checked);
  }
  
	return (
		<form>
			<input
				type="text"
				placeholder="Search..."
				value={props.filterText}
				onChange={handleFilterTextInputChange}
			/>
			<p>
				<input
					type="checkbox"
					checked={props.inStockOnly}
					onChange={handleInStockInputChange}
				/>
				{' '}
				Only show products in stock
			</p>
		</form>
	);
}

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  handleFilterTextInput = (filterText) => {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockInput = (inStockOnly) => {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

const mutableProducts = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export const PRODUCTS = List(mutableProducts.map( product => { return Map(product); } ));
//export const PRODUCTS = List(mutableProducts.map( product => { return Record(product); } ));
// export const PRODUCTS = List(mutableProducts);
