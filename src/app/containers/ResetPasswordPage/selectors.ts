import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.resetPasswordPage || initialState;

export const selectResetPasswordPage = createSelector(
  [selectDomain],
  resetPasswordPageState => resetPasswordPageState,
);
