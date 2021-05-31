import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.productListPage || initialState;

export const selectProductListPage = createSelector(
  [selectDomain],
  productListPageState => productListPageState,
);
