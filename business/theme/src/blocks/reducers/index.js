import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import navigation from './navigation.js';
import registration from './registration.js';
import app from './app.js';

const rootReducer = combineReducers({
	form: formReducer,
	navigation,
	registration,
	app
});


export default rootReducer;