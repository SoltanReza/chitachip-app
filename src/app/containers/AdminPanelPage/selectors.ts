import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.adminPanelPage || initialState;

export const selectBrowseNews = createSelector(
  [selectDomain],
  state => state.browseNews,
);
