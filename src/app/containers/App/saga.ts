import { PayloadAction } from '@reduxjs/toolkit';
import { DONT_SHOW_CONTACT_US_STORAGE_KEY } from 'app/components/FloatContactUs';
import { translations } from 'locales/i18n';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { redirect } from 'utils/history';
import { Storage } from 'utils/storage';
import {
  addToBasketApi,
  browseBasketApi,
  browseCategoriesApi,
  browseHomeListApi,
  browseListProductsApi,
  browseProductApi,
  deleteFromBasketItemApi,
  getCodeApi,
  getTokenApi,
  likeProductApi,
  loginApi,
  registerApi,
  userInfoApi,
} from './api';
import { Routes } from './Router/routes';
import { appActions } from './slice';
import {
  AddToBasketRequest,
  BrowseBasketRequest,
  BrowseCategoriesRequest,
  BrowseHomeListRequest,
  BrowseListProductsRequest,
  BrowseProductRequest,
  DeleteFromBasketItemRequest,
  LikeProductRequest,
  LoginRequest,
  RegisterRequest,
  UserInfoRequest,
} from './types';

export function* logoutSaga() {
  yield Storage.remove('auth');
  yield Storage.remove(DONT_SHOW_CONTACT_US_STORAGE_KEY);
  yield delay(500);
  yield redirect(Routes.home);
}

export function* loginSaga(action: PayloadAction<LoginRequest>) {
  try {
    const response = yield call(loginApi, action.payload);
    yield put(appActions.loginSuccess(response));
    if (response.status === 400) {
      yield put(appActions.notifyError('این کاربر تا کنون ثبت نام نشده است'));
    }
    const token = yield call(getTokenApi, {
      password: action.payload.password,
      username: action.payload.username,
    });
    if (response.status === 200) {
      yield put(appActions.setAuth(token));
      Storage.put('auth', token);
    }

    if (response.status === 100) {
      yield put(appActions.setAuth(token));
      Storage.put('auth', token);
      const code = yield call(getCodeApi, {});
    }
    yield put(
      appActions.notifySuccess(
        translations.pages.LoginPage.loginSuccessMessage,
      ),
    );
    yield redirect(Routes.home);
  } catch (error) {
    yield put(appActions.loginError(error));
    // yield put(appActions.notifyError(error.message));
  }
}
export function* browseHomeListSaga(
  action: PayloadAction<BrowseHomeListRequest>,
) {
  try {
    const response = yield call(browseHomeListApi, action.payload);
    yield put(appActions.browseHomeListSuccess(response));
    // yield put(
    //   appActions.notifySuccess(
    //     translations.pages.HomePage.browseHomeListSuccessMessage,
    //   ),
    // );
  } catch (error) {
    yield put(appActions.browseHomeListError(error));
    // yield put(appActions.notifyError(error.message));
  }
}

export function* browseProductSaga(
  action: PayloadAction<BrowseProductRequest>,
) {
  try {
    const response = yield call(browseProductApi, action.payload);
    yield put(appActions.browseProductSuccess(response));
  } catch (error) {
    yield put(appActions.browseProductError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* browseCategoriesSaga(
  action: PayloadAction<BrowseCategoriesRequest>,
) {
  try {
    const response = yield call(browseCategoriesApi, action.payload);
    yield put(appActions.browseCategoriesSuccess(response));
  } catch (error) {
    yield put(appActions.browseCategoriesError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* browseListProductsSaga(
  action: PayloadAction<BrowseListProductsRequest>,
) {
  try {
    const response = yield call(browseListProductsApi, action.payload);
    yield put(appActions.browseListProductsSuccess(response));
  } catch (error) {
    yield put(appActions.browseListProductsError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* registerSaga(action: PayloadAction<RegisterRequest>) {
  try {
    const response = yield call(registerApi, action.payload);
    yield put(appActions.registerSuccess(response));
    if (response.status === 201) {
      const token = yield call(getTokenApi, {
        password: action.payload.password,
        username: action.payload.mobile,
      });
      yield put(appActions.setAuth(token));
      Storage.put('auth', token);
      const code = yield call(getCodeApi, {});
    }
    if (response.status === 200) {
      yield put(appActions.notifySuccess('شما با موفقیت ثبت نام شده اید'));
      yield redirect(Routes.home);
    }
  } catch (error) {
    yield put(appActions.registerError(error));
    // yield put(appActions.notifyError(error.message));
  }
}

export function* likeProductSaga(action: PayloadAction<LikeProductRequest>) {
  try {
    const response = yield call(likeProductApi, action.payload);
    yield put(appActions.likeProductSuccess(response));
  } catch (error) {
    yield put(appActions.likeProductError(error));
    // yield put(appActions.notifyError(error.message));
  }
}

export function* userInfoSaga(action: PayloadAction<UserInfoRequest>) {
  try {
    const response = yield call(userInfoApi, action.payload);
    yield put(appActions.userInfoSuccess(response));
  } catch (error) {
    // yield put(appActions.userInfoError(error));
    // yield put(appActions.notifyError(error.message));
  }
}

export function* browseBasketSaga(action: PayloadAction<BrowseBasketRequest>) {
  try {
    const response = yield call(browseBasketApi, action.payload);
    if (!response.data) {
      yield put(appActions.browseBasketSuccess(response));
    }
  } catch (error) {
    yield put(appActions.browseBasketError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* addToBasketSaga(action: PayloadAction<AddToBasketRequest>) {
  try {
    const response = yield call(addToBasketApi, action.payload);
    yield put(appActions.addToBasketSuccess(response));
    // if(response.value){
    //   yield put(appActions.notifySuccess());
    // }
    // if(response.data){
    //   yield put(appActions.notifySuccess(error.message));
    // }
  } catch (error) {
    yield put(appActions.addToBasketError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* deleteFromBasketItemSaga(
  action: PayloadAction<DeleteFromBasketItemRequest>,
) {
  try {
    const response = yield call(deleteFromBasketItemApi, action.payload);
    yield put(appActions.deleteFromBasketItemSuccess(response));
  } catch (error) {
    yield put(appActions.deleteFromBasketItemError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* appSaga() {
  yield takeLatest(appActions.clearAuth.type, logoutSaga);
  yield takeLatest(appActions.login.type, loginSaga);
  yield takeLatest(appActions.browseHomeList.type, browseHomeListSaga);
  yield takeLatest(appActions.browseProduct.type, browseProductSaga);
  yield takeLatest(appActions.browseCategories.type, browseCategoriesSaga);
  yield takeLatest(appActions.register.type, registerSaga);
  yield takeLatest(appActions.likeProduct.type, likeProductSaga);
  yield takeLatest(appActions.userInfo.type, userInfoSaga);
  yield takeLatest(appActions.browseBasket.type, browseBasketSaga);
  yield takeLatest(appActions.addToBasket.type, addToBasketSaga);
  yield takeLatest(
    appActions.deleteFromBasketItem.type,
    deleteFromBasketItemSaga,
  );
}
