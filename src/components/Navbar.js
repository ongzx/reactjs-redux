import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <div className="navigation">
                <a href='/product' className="navlink">Product Listing</a>
                <a href='/cart' className="navlink">Cart</a>
            </div>
        )
    }
}

export default Navbar;