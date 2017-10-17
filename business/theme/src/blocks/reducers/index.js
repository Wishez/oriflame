import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import navigation from './navigation.js';
import registration from './registration.js';
import shares from './shares.js';

const rootReducer = combineReducers({
	form: formReducer,
	navigation,
	registration,
	shares
});


export default rootReducer;