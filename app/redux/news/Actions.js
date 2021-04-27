import {request} from '../../utils/Request';
import {START, SUCCESS, ERROR} from './Types';

export const getNews = (country, category) => {
  return async (dispatch, getState) => {
    try {
      dispatch({type: START});
      let response = await request.get('', {params: {country, category}});
      dispatch({type: SUCCESS, payload: response.data.articles});
    } catch (err) {
      dispatch({type: ERROR, payload: err});
    }
  };
};
