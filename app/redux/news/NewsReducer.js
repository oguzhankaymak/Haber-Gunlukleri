import {START, SUCCESS, ERROR, CHANGE_CATEGORY, CHANGE_COUNTRY} from './Types';

const initialState = {
  isLoading: false,
  news: [],
  message: '',
  country: 'tr',
  category: '',
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {...state, isLoading: true, message: ''};
    case SUCCESS:
      return {...state, news: action.payload, isLoading: false};
    case ERROR:
      return {...state, message: action.payload, isLoading: false};
    case CHANGE_COUNTRY:
      return {...state, country: action.payload};
    case CHANGE_CATEGORY:
      return {...state, category: action.payload};
    default:
      return state;
  }
};
