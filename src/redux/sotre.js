/* eslint-disable prettier/prettier */
import { combineReducers,createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { listItemReducer,listReducer,loadingReducer } from './reducer/index';

const reducer = combineReducers({
    listReducer,
    listItemReducer,
    loadingReducer
})

export const store = createStore(reducer,applyMiddleware(thunk));
