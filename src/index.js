import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import {routerMiddleware , syncHistoryWithStore } from 'react-router-redux';
import reduxThunk from 'redux-thunk';
import routes from './routes';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
	routerMiddleware(browserHistory),reduxThunk
	)(createStore);
const store = createStoreWithMiddleware(reducers);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('app'));