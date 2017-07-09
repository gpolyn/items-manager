import React, { Component } from 'react';
import { List, Map, fromJS } from 'immutable';
import { CardTitle, CardSubtitle, Card, CardBlock, Button } from 'reactstrap';

const ProductCategoryButton = (props, context) =>
	<Button size="sm">{props.category}</Button>

const ProductButton = (props, context) => {

  const selectionColor = () => {
    return props.product.isActive ? "primary" : "secondary"; 
  };

	const name = props.product.stocked ?
		props.product.name :
		<span style={{color: 'red'}}>
			{props.product.name}
		</span>;

	return (
		<Button 
      onClick={() => props.onSelection(props.product)}
      color={selectionColor()}
      >
      <Card>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{props.product.price}</CardSubtitle>
      </Card>
		</Button>
	);
}

const ProductTable = (props, context) => {
    const buttons = [];
    let lastCategory = null;
    console.log(props.products.toJSON())
    props.products.forEach((product) => {
      if (product.get('name').indexOf(props.filterText) === -1 || (!product.get('stocked') && props.inStockOnly) || !product.get('categoryIsSelected') ) {
        return;
      }
      buttons.push(<ProductButton {...props} product={product.toJS()} key={product.get('name')} />);
      lastCategory = product.category;
    });

    return (
      <div className='container-fluid'>
        {buttons}
      </div>
    );
}

const SearchBar = (props, context) => {
  
  const handleFilterTextInputChange = (e) => {
    props.onFilterTextInput(e.target.value);
  };
  
  const handleInStockInputChange = (e) => {
    props.onInStockInput(e.target.checked);
  };

  const categoryButtons = [];

  const categories = new Set(props.products.map( product => { 
    return product.get('category'); 
  }));

  const getButton = (category) => {
    return (<Button 
            onClick={() => props.onSelection(category)}
            key={category}
            >{category}</Button>);
  }

  categories.forEach( category => {
    categoryButtons.push(getButton(category))
  });
  
	return (
		<form>
      <div>
        {categoryButtons}
      </div>
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
      inStockOnly: false,
      products: props.products
    };
  }

  handleFilterTextInput = (filterText) => {
    this.setState({
      filterText: filterText
    });
  }

  handleCategorySelection = (e) => {
    console.log('handleCategorySelection');
    const products = this.state.products;
    const list = products.map( product => {
      if ( product.get('category') === e ) {
        return product.set('categoryIsSelected', !product.get('categoryIsSelected'));
      }
      return product;
    });
    console.log('updating state with', list.toJSON())
    this.setState({
      products: list
    });
  }

  handleSelection = (e) => {
    const products = this.state.products;
    const idx = products.findIndex( product => { return e.name === product.get('name') })
    const list = products.update(idx, item => { 
      if (item.get('isActive') === true) {
        return item.set('isActive', false);
      } else {
        return item.set('isActive', true);
      }
    });

    this.setState({
      products: list
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
          products={this.props.products}
          onSelection={this.handleCategorySelection}
        />
        <ProductTable
          products={this.state.products}
          onSelection={this.handleSelection}
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

export const PRODUCTS = fromJS(mutableProducts);
