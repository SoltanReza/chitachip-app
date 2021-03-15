import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.newsPage || initialState;

export const selectBrowseNews = createSelector(
  [selectDomain],
  state => state.browseNews,
);

export const selectEditNews = createSelector(
  [selectDomain],
  state => state.editNews,
);

export const selectAddNews = createSelector(
  [selectDomain],
  state => state.addNews,
);
export const selectUploadImage = createSelector(
  [selectDomain],
  state => state.uploadImage,
);
