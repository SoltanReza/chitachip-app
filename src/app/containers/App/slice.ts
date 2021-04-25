import { PayloadAction } from '@reduxjs/toolkit';
import { AuthData, ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { Storage } from 'utils/storage';
import {
  BrowseCategoriesRequest,
  BrowseCategoriesResponse,
  BrowseHomeListRequest,
  BrowseHomeListResponse,
  BrowseListProductsRequest,
  BrowseListProductsResponse,
  BrowseProductRequest,
  BrowseProductResponse,
  ContainerState,
  LikeProductRequest,
  LikeProductResponse,
  LoginRequest,
  LoginResponse,
  Notif,
  NotifType,
  RegisterRequest,
  RegisterResponse,
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
  browseListProducts: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  register: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  likeProduct: {
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

    //#region BrowseListProducts
    browseListProducts(
      state,
      action: PayloadAction<BrowseListProductsRequest>,
    ) {
      state.browseListProducts.params = action.payload;
      state.browseListProducts.data = initialState.browseListProducts.data;
      state.browseListProducts.error = initialState.browseListProducts.error;
    },
    browseListProductsSuccess(
      state,
      action: PayloadAction<BrowseListProductsResponse>,
    ) {
      state.browseListProducts.params = initialState.browseListProducts.params;
      state.browseListProducts.data = action.payload;
    },
    browseListProductsError(state, action: PayloadAction<ErrorResponse>) {
      state.browseListProducts.params = initialState.browseListProducts.params;
      state.browseListProducts.error = action.payload;
    },
    browseListProductsClear(state) {
      state.browseListProducts = initialState.browseListProducts;
    },
    //#endregion BrowseListProducts

    //#region register
    register(state, action: PayloadAction<RegisterRequest>) {
      state.register.params = action.payload;
      state.register.data = initialState.register.data;
      state.register.error = initialState.register.error;
    },
    registerSuccess(state, action: PayloadAction<RegisterResponse>) {
      state.register.params = initialState.register.params;
      state.register.data = action.payload;
    },
    registerError(state, action: PayloadAction<ErrorResponse>) {
      state.register.params = initialState.register.params;
      state.register.error = action.payload;
    },
    registerClear(state) {
      state.register = initialState.register;
    },
    //#endregion register

    //#region register
    likeProduct(state, action: PayloadAction<LikeProductRequest>) {
      state.likeProduct.params = action.payload;
      state.likeProduct.data = initialState.likeProduct.data;
      state.likeProduct.error = initialState.likeProduct.error;
    },
    likeProductSuccess(state, action: PayloadAction<LikeProductResponse>) {
      // if(state.browseHomeList){
      //   if(state.browseHomeList.data){
      //     const index = state.browseHomeList.data.offers.findIndex(item => item.id === action.payload.id);
      //     if (index === -1) state.card.push(action.payload);
      //     else {
      //       state.card[index].quantity = action.payload.quantity;
      //     }

      //   }
      // }

      state.likeProduct.params = initialState.likeProduct.params;
      state.likeProduct.data = action.payload;
    },
    likeProductError(state, action: PayloadAction<ErrorResponse>) {
      state.likeProduct.params = initialState.likeProduct.params;
      state.likeProduct.error = action.payload;
    },
    likeProductClear(state) {
      state.likeProduct = initialState.likeProduct;
    },
    //#endregion likeProduct

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
