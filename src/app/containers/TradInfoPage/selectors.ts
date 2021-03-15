import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.tradInfoPage || initialState;

export const selectTradInfoPage = createSelector(
  [selectDomain],
  tradInfoPageState => tradInfoPageState,
);
