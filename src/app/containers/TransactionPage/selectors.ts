import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.transactionPage || initialState;

export const selectBrowseTransaction = createSelector(
  [selectDomain],
  state => state.browseTransaction,
);
