import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Example reducer

const rootReducer = combineReducers({
  user: userReducer,
  // Add more reducers for other parts of your state
});

export default rootReducer;