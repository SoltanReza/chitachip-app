import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.contactusPage || initialState;

export const selectContactusPage = createSelector(
  [selectDomain],
  contactusPageState => contactusPageState,
);
