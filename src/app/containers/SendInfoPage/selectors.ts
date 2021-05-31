import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.sendInfoPage || initialState;

export const selectSendInfoPage = createSelector(
  [selectDomain],
  sendInfoPageState => sendInfoPageState,
);
