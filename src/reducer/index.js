import { combineReducers } from 'redux';
// import reducer from './reducer'

import postReducer from './postReducer';

export default combineReducers({
    rootReducer: postReducer
})