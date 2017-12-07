
import todos from './todos';
import ipInfo from './ipInfo';
import { combineReducers } from 'redux';


const todoApp = combineReducers({
  todos,
  ipInfo
})

export default todoApp