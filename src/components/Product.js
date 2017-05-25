import React, { Component, PropTypes } from 'react';

class Product extends Component {

    render() {

        let { data } = this.props;

        return (
            <div className="product-item">
                <img src={"../assets/"+data.image} className="product-image" />
                <p className="product-name">{data.name}</p>
                <p className="product-name">{data.price}</p>
                <p className="product-name">{data.brand}</p>
            </div>
        )
    }
}

export default Product;