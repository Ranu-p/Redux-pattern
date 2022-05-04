import { combineReducers } from "redux";
// import { reducer as form } from 'redux-form';

import task from "./task";
import register from './register';

export default combineReducers({
 task,
 register
});
