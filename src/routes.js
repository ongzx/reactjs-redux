import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
// import ProductContainer from './containers/ProductContainer';
// import CartContainer from './containers/CartContainer';

export default (
    <Route path ="/" component={App} >
        {/*<Route path="/product" component={ProductContainer} />
        <Route path="/cart" component={CartContainer} />*/}
    </Route>
)