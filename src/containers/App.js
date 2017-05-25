import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import ProductsContainer from './ProductsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

        </div>
        <Navbar />
        <ProductsContainer />
      </div>
    );
  }
}

export default App;
