import {createSelector} from 'reselect';

export const newsDataMemo = createSelector(
  state => state.news.news,
  news => news,
);

export const countryDataMemo = createSelector(
  state => state.news.country,
  country => country,
);

export const categoryDataMemo = createSelector(
  state => state.news.category,
  category => category,
);
