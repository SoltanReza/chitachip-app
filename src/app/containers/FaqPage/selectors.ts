import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.faqPage || initialState;

export const selectFaqPage = createSelector(
  [selectDomain],
  faqPageState => faqPageState,
);
