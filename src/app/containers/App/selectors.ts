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
    } as Auth),
);

export const selectAuthData = createSelector(
  [selectDomain],
  state => state.auth,
);

export const selectBrowseHomeList = createSelector(
  [selectDomain],
  state => state.browseHomeList,
);

export const selectBrowseProduct = createSelector(
  [selectDomain],
  state => state.browseProduct,
);

export const selectBrowseCategories = createSelector(
  [selectDomain],
  state => state.browseCategories,
);

export const selectBrowseListProducts = createSelector(
  [selectDomain],
  state => state.browseListProducts,
);

export const selectRegister = createSelector(
  [selectDomain],
  state => state.register,
);

export const selectLikeProduct = createSelector(
  [selectDomain],
  state => state.likeProduct,
);

export const selectUserInfo = createSelector(
  [selectDomain],
  state => state.userInfo,
);

export const selectBrowseBasket = createSelector(
  [selectDomain],
  state => state.browseBasket,
);

export const selectAddToBasket = createSelector(
  [selectDomain],
  state => state.addToBasket,
);

export const selectDeleteFromBasketItem = createSelector(
  [selectDomain],
  state => state.deleteFromBasketItem,
);
