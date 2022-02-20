import { combineReducers } from 'redux';
import userLoginReducer from './userLoginState';
import filterReducer from './filterState';

const rootReducer = combineReducers({
    userLoginReducer,
    filterReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;