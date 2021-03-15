import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.packagePage || initialState;

export const selectBrowsePackage = createSelector(
  [selectDomain],
  state => state.browsePackage,
);

export const selectEditPackage = createSelector(
  [selectDomain],
  state => state.editPackage,
);

export const selectAddPackage = createSelector(
  [selectDomain],
  state => state.addPackage,
);
