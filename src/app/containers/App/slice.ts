import { PayloadAction } from '@reduxjs/toolkit';
import { AuthData, ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { Storage } from 'utils/storage';
import {
  AddToBasketRequest,
  AddToBasketResponse,
  BrowseBasketRequest,
  BrowseBasketResponse,
  BrowseCategoriesRequest,
  BrowseCategoriesResponse,
  BrowseHomeListRequest,
  BrowseHomeListResponse,
  BrowseListProductsRequest,
  BrowseListProductsResponse,
  BrowseProductRequest,
  BrowseProductResponse,
  ContainerState,
  DeleteFromBasketItemRequest,
  DeleteFromBasketItemResponse,
  LikeProductRequest,
  LikeProductResponse,
  LoginRequest,
  LoginResponse,
  Notif,
  NotifType,
  RegisterRequest,
  RegisterResponse,
  UserInfoRequest,
  UserInfoResponse,
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
  userInfo: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  browseBasket: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  addToBasket: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  deleteFromBasketItem: {
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

    //#region likeProduct
    likeProduct(state, action: PayloadAction<LikeProductRequest>) {
      state.likeProduct.params = action.payload;
      state.likeProduct.data = initialState.likeProduct.data;
      state.likeProduct.error = initialState.likeProduct.error;
    },
    likeProductSuccess(state, action: PayloadAction<LikeProductResponse>) {
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

    //#region UserInfo
    userInfo(state, action: PayloadAction<UserInfoRequest>) {
      state.userInfo.params = action.payload;
      state.userInfo.data = initialState.userInfo.data;
      state.userInfo.error = initialState.userInfo.error;
    },
    userInfoSuccess(state, action: PayloadAction<UserInfoResponse>) {
      state.userInfo.params = initialState.userInfo.params;
      state.userInfo.data = action.payload;
    },
    userInfoError(state, action: PayloadAction<ErrorResponse>) {
      state.userInfo.params = initialState.userInfo.params;
      state.userInfo.error = action.payload;
    },
    userInfoClear(state) {
      state.userInfo = initialState.userInfo;
    },
    //#endregion UserInfo

    //#region BrowseBasket
    browseBasket(state, action: PayloadAction<BrowseBasketRequest>) {
      state.browseBasket.params = action.payload;
      state.browseBasket.data = initialState.browseBasket.data;
      state.browseBasket.error = initialState.browseBasket.error;
    },
    browseBasketSuccess(state, action: PayloadAction<BrowseBasketResponse>) {
      state.browseBasket.params = initialState.browseBasket.params;
      state.browseBasket.data = action.payload;
    },
    browseBasketError(state, action: PayloadAction<ErrorResponse>) {
      state.browseBasket.params = initialState.browseBasket.params;
      state.browseBasket.error = action.payload;
    },
    browseBasketClear(state) {
      state.browseBasket = initialState.browseBasket;
    },
    //#endregion BrowseBasket

    //#region AddToBasket
    addToBasket(state, action: PayloadAction<AddToBasketRequest>) {
      state.addToBasket.params = action.payload;
      state.addToBasket.data = initialState.addToBasket.data;
      state.addToBasket.error = initialState.addToBasket.error;
    },
    addToBasketSuccess(state, action: PayloadAction<AddToBasketResponse>) {
      // if (state.browseBasket.data) {
      //   if (state.browseBasket.data.value) {
      //     console.log(action.payload.data.products);
      //     state.browseBasket.data.value.products =
      //     state.browseBasket.data.value.products.map(item =>
      //       item.product_id === )

      //     action.payload.data.products.;
      //   }
      // }

      state.addToBasket.params = initialState.addToBasket.params;
      state.addToBasket.data = action.payload;
    },
    addToBasketError(state, action: PayloadAction<ErrorResponse>) {
      state.addToBasket.params = initialState.addToBasket.params;
      state.addToBasket.error = action.payload;
    },
    addToBasketClear(state) {
      state.addToBasket = initialState.addToBasket;
    },
    //#endregion AddToBasket

    //#region DeleteFromBasketItem
    deleteFromBasketItem(
      state,
      action: PayloadAction<DeleteFromBasketItemRequest>,
    ) {
      state.deleteFromBasketItem.params = action.payload;
      state.deleteFromBasketItem.data = initialState.deleteFromBasketItem.data;
      state.deleteFromBasketItem.error =
        initialState.deleteFromBasketItem.error;
    },
    deleteFromBasketItemSuccess(
      state,
      action: PayloadAction<DeleteFromBasketItemResponse>,
    ) {
      if (state.browseBasket.data) {
        state.browseBasket.data.value.products = state.browseBasket.data.value.products.filter(
          item =>
            item.product_id !== state.deleteFromBasketItem.params?.product_id,
        );
      }

      state.deleteFromBasketItem.params =
        initialState.deleteFromBasketItem.params;
      state.deleteFromBasketItem.data = action.payload;
    },
    deleteFromBasketItemError(state, action: PayloadAction<ErrorResponse>) {
      state.deleteFromBasketItem.params =
        initialState.deleteFromBasketItem.params;
      state.deleteFromBasketItem.error = action.payload;
    },
    deleteFromBasketItemClear(state) {
      state.deleteFromBasketItem = initialState.deleteFromBasketItem;
    },
    //#endregion DeleteFromBasketItem

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
