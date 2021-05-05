import {request} from '../../utils/Request';
import {START, SUCCESS, ERROR} from './Types';

export const getNews = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const country = state?.news?.country.key;
      const category = state?.news?.category.key;
      dispatch({type: START});
      let response = await request.get('', {params: {country, category}});
      dispatch({type: SUCCESS, payload: response.data.articles});
    } catch (err) {
      dispatch({type: ERROR, payload: err});
    }
  };
};
