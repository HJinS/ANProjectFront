import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import axios from 'axios';
import rootReducer from './modules/__reducers/reducer_setting';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import _ from 'lodash';

const store = createStore(rootReducer);

axios.defaults.withCredentials = true;

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
document.body.appendChild(component());