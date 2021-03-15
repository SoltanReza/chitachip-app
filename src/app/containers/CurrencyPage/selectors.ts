import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.currencyPage || initialState;

export const selectBrowseCurrency = createSelector(
  [selectDomain],
  state => state.browseCurrency,
);

export const selectEditCurrency = createSelector(
  [selectDomain],
  state => state.editCurrency,
);

export const selectAddCurrency = createSelector(
  [selectDomain],
  state => state.addCurrency,
);
