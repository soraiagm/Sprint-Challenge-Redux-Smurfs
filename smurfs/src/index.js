import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { SmurfsReducer } from './reducers';

const store = createStore(smurfsReducer, applyMiddleware(thunk, logger));
  
  
// this is the most basic reducer. A function that returns and object. Replace it.
/* be sure to throw in the proper middlewares here*/


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
