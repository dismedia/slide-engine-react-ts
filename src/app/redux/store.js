"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducers_1 = require("./reducers");
var react_router_redux_1 = require("react-router-redux");
var redux_thunk_1 = require("redux-thunk");
var createLogger = require('redux-logger');
function configureStore(browserHistory, initialState) {
    var middlewares = [
        react_router_redux_1.routerMiddleware(browserHistory),
        redux_thunk_1.default,
        createLogger()
    ];
    var composeEnhancers = (typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || redux_1.compose;
    var store = null;
    try {
        store = redux_1.createStore(reducers_1.rootReducer, initialState, composeEnhancers(redux_1.applyMiddleware.apply(void 0, middlewares)));
    }
    catch (e) {
        console.error(e);
    }
    console.log(store.getState());
    if (module.hot) {
        module.hot.accept('./reducers', function () {
            store.replaceReducer((require('./reducers')));
        });
    }
    return store;
}
exports.configureStore = configureStore;
