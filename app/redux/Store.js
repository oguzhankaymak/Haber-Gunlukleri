import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {newsReducer} from './news/NewsReducer';

const combinedReducers = combineReducers({
  news: newsReducer,
});

export default function configureStore(initialState = {}) {
  return createStore(combinedReducers, initialState, applyMiddleware(thunk));
}
