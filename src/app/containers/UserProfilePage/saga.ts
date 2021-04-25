import { PayloadAction } from '@reduxjs/toolkit';
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { appActions } from '../App/slice';

import { editUserApi } from './api';
import { actions } from './slice';
import { EditUserRequest } from './types';

export function* editUserSaga(action: PayloadAction<EditUserRequest>) {
  try {
    const response = yield call(editUserApi, action.payload);
    yield put(actions.editUserSuccess(response));
  } catch (error) {
    yield put(actions.editUserError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* userProfilePageSaga() {
  yield takeLatest(actions.editUser.type, editUserSaga);
}
