import { createSelector } from '@reduxjs/toolkit';
import { Auth, AuthRoles, RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.app || initialState;

export const selectApp = createSelector([selectDomain], state => state);

export const selectNotification = createSelector(
  [selectDomain],
  state => state.notifications,
);

export const selectLogin = createSelector([selectDomain], state => state.login);

export const selectAuth = createSelector(
  [selectDomain],
  state =>
    ({
      data: state.auth,
      isAuthenticated: () => !!state.auth,
      hasRole: (roles?: AuthRoles[]) =>
        roles && state.auth ? roles.includes(state.auth.role) : false,
      profileIsCompleted: () => !!state.auth?.user.profile,
    } as Auth),
);

export const selectAuthData = createSelector(
  [selectDomain],
  state => state.auth,
);

export const selectGetMyProfile = createSelector(
  [selectDomain],
  state => state.getMyProfile,
);

export const selectBrowseMessage = createSelector(
  [selectDomain],
  state => state.browseMessage,
);

export const selectBrowseUser = createSelector(
  [selectDomain],
  state => state.browseUser,
);

export const selectBrowseCurrency = createSelector(
  [selectDomain],
  state => state.browseCurrency,
);

export const selectBrowsePackageGlobalList = createSelector(
  [selectDomain],
  state => state.browsePackageGlobalList,
);

export const selectBrowseAgentList = createSelector(
  [selectDomain],
  state => state.browseAgentList,
);

export const selectAddAgent = createSelector(
  [selectDomain],
  state => state.addAgent,
);
