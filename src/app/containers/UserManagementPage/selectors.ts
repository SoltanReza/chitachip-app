import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.userManagementPage || initialState;

export const selectBrowseUsers = createSelector(
  [selectDomain],
  state => state.browseUsers,
);

export const selectEditUsers = createSelector(
  [selectDomain],
  state => state.editUsers,
);

export const selectAddUsers = createSelector(
  [selectDomain],
  state => state.AddUsers,
);

export const selectExportUsers = createSelector(
  [selectDomain],
  state => state.exportUsers,
);

export const selectImportUsers = createSelector(
  [selectDomain],
  state => state.importUsers,
);
export const selectImportFinancial = createSelector(
  [selectDomain],
  state => state.importFinancial,
);

export const selectModifyCurrencyType = createSelector(
  [selectDomain],
  state => state.modifyCurrencyType,
);
