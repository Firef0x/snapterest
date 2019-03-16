import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import initialState from './initialState';
import rootReducer from '../reducer/index';

let composeEnhancers = compose;

const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
if (typeof composeWithDevToolsExtension === 'function') {
  composeEnhancers = composeWithDevToolsExtension;
}

const logger = createLogger({
  duration: true,
  collapsed: true,
  diff: true
});

const stores = createStore(
  rootReducer(),
  initialState(),
  composeEnhancers(
    applyMiddleware(logger)
  )
);

export {
  stores as default
};
