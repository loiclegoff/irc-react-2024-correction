import { combineReducers } from 'redux';
import { robotReducer } from './robot.reducer';
import { partReducer } from './part.reducer';

const globalReducer = combineReducers({
  robotReducer,
  partReducer,
});

export default globalReducer;
