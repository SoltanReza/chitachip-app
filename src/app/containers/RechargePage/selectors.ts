import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.rechargePage || initialState;

export const selectWithdraw = createSelector(
  [selectDomain],
  state => state.withdraw,
);
