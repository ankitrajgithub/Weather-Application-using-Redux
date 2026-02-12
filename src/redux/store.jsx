import {createStore} from 'redux';
import {weatherReducer} from './reducer/weatherReducer';

export const store=createStore(
    weatherReducer
);
