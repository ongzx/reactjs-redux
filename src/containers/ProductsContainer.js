import React, { Component } from 'react';
import products from '../data/products.json';
import Product from '../components/Product';

class ProductsContainer extends Component {

    render() {
        return (
            <div className="product-container" style={{display: "flex", flexFlow: "row wrap", justifyContent:'flex-start'}}>
                {
                    products.products.map((item) => {
                        return (
                            <Product data={item} />
                        )
                    }) 
                }
            </div>
        )
    }
}

export default ProductsContainer;