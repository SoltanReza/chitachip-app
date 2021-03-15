import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.registerPage || initialState;

export const selectRegister = createSelector(
  [selectDomain],
  state => state.register,
);
