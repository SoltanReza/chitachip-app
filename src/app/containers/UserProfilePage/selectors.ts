import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.userProfilePage || initialState;

export const selectUserProfilePage = createSelector(
  [selectDomain],
  userProfilePageState => userProfilePageState,
);
