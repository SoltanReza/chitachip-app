import { PayloadAction } from '@reduxjs/toolkit';
import { DONT_SHOW_CONTACT_US_STORAGE_KEY } from 'app/components/FloatContactUs';
import { translations } from 'locales/i18n';
import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { AuthData } from 'types';
import { redirect } from 'utils/history';
import { Storage } from 'utils/storage';
import {
  addAgentApi,
  browseAgentListApi,
  browseCurrencyApi,
  browseMessageApi,
  browsePackageGlobalListApi,
  browseUserApi,
  getMyProfileApi,
  loginApi,
} from './api';
import { Routes } from './Router/routes';
import { selectAuthData } from './selectors';
import { appActions } from './slice';
import {
  AddAgentRequest,
  BrowseAgentListRequest,
  BrowseCurrencyRequest,
  BrowseMessageRequest,
  BrowsePackageGlobalListRequest,
  BrowseUserRequest,
  GetMyProfileRequest,
  LoginRequest,
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
    const userProfileResponse = yield call(getMyProfileApi, {
      token: response.token,
    });
    const authData: AuthData = {
      ...response,
      user: userProfileResponse,
    };

    yield put(appActions.loginSuccess(authData));
    yield put(appActions.setAuth(authData));
    Storage.put('auth', authData);
    yield redirect(Routes.dashboard);
    yield put(
      appActions.notifySuccess(
        translations.pages.LoginPage.loginSuccessMessage,
      ),
    );
  } catch (error) {
    yield put(appActions.loginError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* getMyProfileSaga(action: PayloadAction<GetMyProfileRequest>) {
  try {
    const response = yield call(getMyProfileApi, action.payload);
    const authData = yield select(selectAuthData);
    const newAuthData: AuthData = {
      ...authData,
      user: response,
    };
    yield put(appActions.getMyProfileSuccess(response));
    yield put(appActions.setAuth(newAuthData));

    Storage.put('auth', newAuthData);
  } catch (error) {
    yield put(appActions.getMyProfileError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* browseMessageSaga(
  action: PayloadAction<BrowseMessageRequest>,
) {
  try {
    const response = yield call(browseMessageApi, action.payload);

    yield put(appActions.browseMessageSuccess(response));
  } catch (error) {
    yield put(appActions.browseMessageError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* browseUserSaga(action: PayloadAction<BrowseUserRequest>) {
  try {
    const response = yield call(browseUserApi, action.payload);

    yield put(appActions.browseUserSuccess(response));
  } catch (error) {
    yield put(appActions.browseUserError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* browseCurrencySaga(
  action: PayloadAction<BrowseCurrencyRequest>,
) {
  try {
    const response = yield call(browseCurrencyApi, action.payload);
    yield put(appActions.browseCurrencySuccess(response));
  } catch (error) {
    yield put(appActions.browseCurrencyError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* browsePackageGlobalListSaga(
  action: PayloadAction<BrowsePackageGlobalListRequest>,
) {
  try {
    const response = yield call(browsePackageGlobalListApi, action.payload);
    yield put(appActions.browsePackageGlobalListSuccess(response));
  } catch (error) {
    yield put(appActions.browsePackageGlobalListError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* browseAgentListSaga(
  action: PayloadAction<BrowseAgentListRequest>,
) {
  try {
    const response = yield call(browseAgentListApi, action.payload);

    yield put(appActions.browseAgentListSuccess(response));
  } catch (error) {
    yield put(appActions.browseAgentListError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* addAgentSaga(action: PayloadAction<AddAgentRequest>) {
  try {
    const response = yield call(addAgentApi, action.payload);
    yield put(appActions.addAgentSuccess(response));
    const authData = yield select(selectAuthData);
    Storage.put('auth', authData);
    // yield put(
    //   appActions.notifySuccess(
    //     translations.pages.UserManagementPage.addAgent.successMessage,
    //   ),
    // );
  } catch (error) {
    yield put(appActions.notifyError(error.message));
    yield put(appActions.addAgentError(error));
  }
}

export function* appSaga() {
  yield takeLatest(appActions.clearAuth.type, logoutSaga);
  yield takeLatest(appActions.login.type, loginSaga);
  yield takeLatest(appActions.getMyProfile.type, getMyProfileSaga);
  yield takeLatest(appActions.browseMessage.type, browseMessageSaga);
  yield takeLatest(appActions.browseUser.type, browseUserSaga);
  yield takeLatest(appActions.browseCurrency.type, browseCurrencySaga);
  yield takeLatest(
    appActions.browsePackageGlobalList.type,
    browsePackageGlobalListSaga,
  );
  yield takeLatest(appActions.browseAgentList.type, browseAgentListSaga);
  yield takeLatest(appActions.addAgent.type, addAgentSaga);
}
