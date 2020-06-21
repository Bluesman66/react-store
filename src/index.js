import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { applyMiddleware, compose, createStore } from 'redux';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from 'reducers';
import routes from 'routes';
import thunk from 'redux-thunk';

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

const app = (
	<Provider store={store}>
		<BrowserRouter>{routes}</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
