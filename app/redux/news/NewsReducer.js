import {START, SUCCESS, ERROR} from './Types';

const initialState = {
  isLoading: false,
  news: [],
  message: '',
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {...state, isLoading: true, message: ''};
    case SUCCESS:
      return {...state, news: action.payload, isLoading: false};
    case ERROR:
      return {...state, message: action.payload, isLoading: false};
    default:
      return state;
  }
};
