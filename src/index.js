import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
import reducers from './reducers';
// import { getAllProducts } from './actions';
import routes from './routes';
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
// const middleware = [ thunk ];

// if (process.env.NODE_ENV !== 'production') {
//     middleware.push(createLogger());
// } 

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
)

// store.dispatch(getAllProducts());

// const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <div>
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path="/" component={App}/>
                    {/*<Route path="/product" component={ProductContainer}/>
                    <Route path="/cart" component={CartContainer}/>*/}
                </div>
            </ConnectedRouter>
        </div>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
