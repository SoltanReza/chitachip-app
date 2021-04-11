import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.productDetailsPage || initialState;

export const selectProductDetailsPage = createSelector(
  [selectDomain],
  productDetailsPageState => productDetailsPageState,
);
