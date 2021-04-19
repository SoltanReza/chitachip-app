import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.basketPage || initialState;

export const selectBasketPage = createSelector(
  [selectDomain],
  basketPageState => basketPageState,
);
