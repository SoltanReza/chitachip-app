import { PayloadAction } from '@reduxjs/toolkit';
import { AuthData, ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { Storage } from 'utils/storage';
import {
  BrowseCategoriesRequest,
  BrowseCategoriesResponse,
  BrowseHomeListRequest,
  BrowseHomeListResponse,
  BrowseProductRequest,
  BrowseProductResponse,
  ContainerState,
  LoginRequest,
  LoginResponse,
  Notif,
  NotifType,
} from './types';

// The initial state of the App container
export const initialState: ContainerState = {
  notifications: [],

  login: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  browseHomeList: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  browseProduct: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  browseCategories: {
    params: undefined,
    data: undefined,
    error: undefined,
  },

  auth: Storage.read<AuthData>('auth', undefined),
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // #region notify
    notify(state, action: PayloadAction<Notif>) {
      state.notifications = [...state.notifications, action.payload];
    },
    notifySuccess(state, action: PayloadAction<string>) {
      state.notifications = [
        ...state.notifications,
        { message: action.payload, type: NotifType.SUCCESS },
      ];
    },
    notifyError(state, action: PayloadAction<string>) {
      state.notifications = [
        ...state.notifications,
        { message: action.payload, type: NotifType.ERROR },
      ];
    },
    notifyWarning(state, action: PayloadAction<string>) {
      state.notifications = [
        ...state.notifications,
        { message: action.payload, type: NotifType.WARNING },
      ];
    },
    notifyInfo(state, action: PayloadAction<string>) {
      state.notifications = [
        ...state.notifications,
        { message: action.payload, type: NotifType.INFO },
      ];
    },
    notifyClear(state) {
      state.notifications = [];
    },
    // #endregion notify

    //#region login
    login(state, action: PayloadAction<LoginRequest>) {
      state.login.params = action.payload;
      state.login.data = initialState.login.data;
      state.login.error = initialState.login.error;
    },
    loginSuccess(state, action: PayloadAction<LoginResponse>) {
      state.login.params = initialState.login.params;
      state.login.data = action.payload;
    },
    loginError(state, action: PayloadAction<ErrorResponse>) {
      state.login.params = initialState.login.params;
      state.login.error = action.payload;
    },
    loginClear(state) {
      state.login = initialState.login;
    },
    //#endregion login

    //#region BrowseHomeList
    browseHomeList(state, action: PayloadAction<BrowseHomeListRequest>) {
      state.browseHomeList.params = action.payload;
      state.browseHomeList.data = initialState.browseHomeList.data;
      state.browseHomeList.error = initialState.browseHomeList.error;
    },
    browseHomeListSuccess(
      state,
      action: PayloadAction<BrowseHomeListResponse>,
    ) {
      state.browseHomeList.params = initialState.browseHomeList.params;
      state.browseHomeList.data = action.payload;
    },
    browseHomeListError(state, action: PayloadAction<ErrorResponse>) {
      state.browseHomeList.params = initialState.browseHomeList.params;
      state.browseHomeList.error = action.payload;
    },
    browseHomeListClear(state) {
      state.browseHomeList = initialState.browseHomeList;
    },
    //#endregion BrowseHomeList

    //#region BrowseProduct
    browseProduct(state, action: PayloadAction<BrowseProductRequest>) {
      state.browseProduct.params = action.payload;
      state.browseProduct.data = initialState.browseProduct.data;
      state.browseProduct.error = initialState.browseProduct.error;
    },
    browseProductSuccess(state, action: PayloadAction<BrowseProductResponse>) {
      state.browseProduct.params = initialState.browseProduct.params;
      state.browseProduct.data = action.payload;
    },
    browseProductError(state, action: PayloadAction<ErrorResponse>) {
      state.browseProduct.params = initialState.browseProduct.params;
      state.browseProduct.error = action.payload;
    },
    browseProductClear(state) {
      state.browseProduct = initialState.browseProduct;
    },
    //#endregion BrowseProduct

    //#region BrowseCategories
    browseCategories(state, action: PayloadAction<BrowseCategoriesRequest>) {
      state.browseCategories.params = action.payload;
      state.browseCategories.data = initialState.browseCategories.data;
      state.browseCategories.error = initialState.browseCategories.error;
    },
    browseCategoriesSuccess(
      state,
      action: PayloadAction<BrowseCategoriesResponse>,
    ) {
      state.browseCategories.params = initialState.browseCategories.params;
      state.browseCategories.data = action.payload;
    },
    browseCategoriesError(state, action: PayloadAction<ErrorResponse>) {
      state.browseCategories.params = initialState.browseCategories.params;
      state.browseCategories.error = action.payload;
    },
    browseCategoriesClear(state) {
      state.browseCategories = initialState.browseCategories;
    },
    //#endregion browseCategories

    //#region auth
    setAuth: (state, action: PayloadAction<AuthData>) => {
      state.auth = action.payload;
    },
    clearAuth: state => {
      state.auth = undefined;
    },
    //#endregion auth
  },
});

export const {
  actions,
  actions: appActions,
  reducer,
  name: sliceKey,
} = appSlice;
