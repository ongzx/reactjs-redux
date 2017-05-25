import _products from './data/products.json';
import * as types from '../constants/ActionTypes';

const TIMEOUT = 100;

const getProducts = (cb, timeout) => {
    setTimeout(() => cb(_products.products), timeout ||  TIMEOUT);
}

const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products: products
})

export const getAllProducts = () => dispatch => {
    getProducts(products => {
        dispatch(receiveProducts(products))
    })
}

const addToCartUnsafe = productId => ({
    type: types.ADD_TO_CART,
    productId
})

export const addToCart = productId =>  (dispatch, getState) => {
    dispatch(addToCartUnsafe(productId));
}

