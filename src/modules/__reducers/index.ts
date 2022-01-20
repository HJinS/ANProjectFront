import { combineReducers } from 'redux';
import userLoginReducer from './userLoginState';

const rootReducer = combineReducers({
    userLoginReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;