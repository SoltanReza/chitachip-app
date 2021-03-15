import { PayloadAction } from '@reduxjs/toolkit';
import { DONT_SHOW_CONTACT_US_STORAGE_KEY } from 'app/components/FloatContactUs';
import { translations } from 'locales/i18n';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { redirect } from 'utils/history';
import { Storage } from 'utils/storage';
import { loginApi } from './api';
import { Routes } from './Router/routes';
import { appActions } from './slice';
import { LoginRequest } from './types';

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
    yield put(appActions.setAuth(response));
    Storage.put('auth', response);
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

export function* appSaga() {
  yield takeLatest(appActions.clearAuth.type, logoutSaga);
  yield takeLatest(appActions.login.type, loginSaga);
}
