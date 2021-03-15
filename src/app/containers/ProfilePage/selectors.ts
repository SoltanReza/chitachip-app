import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.profilePage || initialState;

export const selectEditProfile = createSelector(
  [selectDomain],
  state => state.editProfile,
);
