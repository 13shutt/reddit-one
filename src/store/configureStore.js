import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createReducer from './reducers';

export default function configureStore(history) {
  const middlewares = [thunk, routerMiddleware(history)];
  const enhancers = composeWithDevTools(applyMiddleware(...middlewares));
  return createStore(connectRouter(history)(createReducer()), enhancers);
}