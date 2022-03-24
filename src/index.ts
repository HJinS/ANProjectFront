import { combineReducers } from 'redux';
import userLoginReducer from './modules/__reducers/userLoginState';
import filterReducer from './modules/__reducers/filterState';
import _ from 'lodash';
import * as _ from 'lodash';

const rootReducer = combineReducers({
    userLoginReducer,
    filterReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

 function component() {
   const element = document.createElement('div');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());