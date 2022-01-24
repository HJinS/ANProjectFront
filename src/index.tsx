import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import axios from 'axios';
import rootReducer from './modules/__reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

axios.defaults.withCredentials = true;

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
