import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.financialInfoPage || initialState;

export const selectFinancialInfoPage = createSelector(
  [selectDomain],
  financialInfoPageState => financialInfoPageState,
);

export const selectBrowseFinancialInfo = createSelector(
  [selectDomain],
  state => state.browseFinancialInfo,
);
