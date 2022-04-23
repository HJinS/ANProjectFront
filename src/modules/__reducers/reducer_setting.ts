import { combineReducers } from 'redux';
import userLoginReducer from './userLoginState';
import filterReducer from './filterState';
import searchReducer from './searchState';

const rootReducer = combineReducers({
    userLoginReducer,
    filterReducer,
    searchReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;