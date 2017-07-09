import {compose, createStore, Store, Middleware, applyMiddleware} from "redux";

import {rootReducer} from "./reducers";
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
const createLogger = require('redux-logger');





export function configureStore(browserHistory,initialState: any): Store<any> {

  const middlewares: Middleware[] = [
    routerMiddleware(browserHistory),
    thunk,
    createLogger()
  ];



  const composeEnhancers = (typeof window === 'object' &&
    (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



  let store = null;

  try {

    store = createStore(rootReducer, initialState,composeEnhancers(
      applyMiddleware(...middlewares),
    ));

  } catch (e) {
    console.error(e);
  }


  console.log(store.getState());
  if ( (module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      store.replaceReducer((require('./reducers')));
    });
  }

  return store;
}
