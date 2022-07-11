import { combineReducers } from 'redux';
//import { connectRouter } from 'connected-react-router';

import app from 'src/App/reducer';

const rootReducer = combineReducers({
  app,
  //router: connectRouter(history),
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
