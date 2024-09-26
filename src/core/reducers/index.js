import { combineReducers } from 'redux';
import { robotReducer } from './robot.reducer';

const globalReducer = combineReducers({
  robotReducer,
});

export default globalReducer;
