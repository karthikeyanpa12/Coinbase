import React, { Component } from 'react';
import axios from 'axios'
import AllProduct from './Products/AllProduct'
import ProductStats from './Products/ProductStats'
import './App.css';

class App extends Component {
  state = { products: [], selectedProduct: '' }

  componentDidMount() {
    axios.get('http://localhost:5000/products')
      .then(res =>
        this.setState({ products: res.data })
      );
  }

  selectedProduct = (id) => {
    return axios.get('http://localhost:5000/products/11/stats')
      .then(res =>
        this.setState({ selectedProduct: res.data })
      );
  }

  render() {
    const { products, selectedProduct } = this.state;
    return (
      <div className="app" >
        <h3> CoinBase App</h3>
        <AllProduct products={products} selectedProduct={this.selectedProduct}></AllProduct>
        <ProductStats product={selectedProduct}></ProductStats>
      </div >
    );
  }
}

export default App;
