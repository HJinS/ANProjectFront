import './index.css';
import Router from './Router';
import axios from 'axios';
import rootReducer from './modules/__reducers/reducer_setting';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

const store = createStore(rootReducer);

//axios.defaults.baseURL = 'http://3.39.71.147:8000';
axios.defaults.baseURL = 'http://localhost:8000';
const rootElement = document.getElementById('root')
if(!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);