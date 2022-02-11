import { combineReducers } from 'redux';
import request from './request';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({ request, form: formReducer });
