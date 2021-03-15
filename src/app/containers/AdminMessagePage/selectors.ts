import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.adminMessagePage || initialState;

export const selectBrowseMessage = createSelector(
  [selectDomain],
  state => state.browseMessage,
);

export const selectEditMessage = createSelector(
  [selectDomain],
  state => state.editMessage,
);

export const selectAddMessage = createSelector(
  [selectDomain],
  state => state.addMessage,
);

export const selectDeleteMessage = createSelector(
  [selectDomain],
  state => state.addMessage,
);
