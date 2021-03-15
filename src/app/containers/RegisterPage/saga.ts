import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { appActions } from '../App/slice';
import { registerApi } from './api';
import { actions } from './slice';
import { RegisterRequest } from './types';

export function* registerSaga(action: PayloadAction<RegisterRequest>) {
  try {
    yield call(registerApi, action.payload);
    yield put(
      appActions.login({
        username: action.payload.email,
        password: action.payload.password,
      }),
    );
  } catch (error) {
    yield put(actions.registerError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* registerPageSaga() {
  yield takeLatest(actions.register.type, registerSaga);
}
