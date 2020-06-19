import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import createRootReducer from 'reducers';
import routes from 'routes';
import thunk from 'redux-thunk';

const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(
	createRootReducer(history),
	composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>{routes}</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
