import {createStore, compose, applyMiddleware} from 'redux';
import {rootReducer} from './reducer/index';
import {thunk} from 'redux-thunk';

const reduxDevTool=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store=createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        reduxDevTool
    )
);
