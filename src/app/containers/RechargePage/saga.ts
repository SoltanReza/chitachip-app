import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { redirect } from 'utils/history';
import { Routes } from '../App/Router/routes';
import { appActions } from '../App/slice';
import { withdrawApi } from './api';
import { actions } from './slice';
import { WithdrawRequest } from './types';

export function* withdrawSaga(action: PayloadAction<WithdrawRequest>) {
  try {
    const response = yield call(withdrawApi, action.payload);

    yield put(actions.withdrawSuccess(response));
    yield redirect(Routes.transaction);
  } catch (error) {
    yield put(actions.withdrawError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* rechargePageSaga() {
  yield takeLatest(actions.withdraw.type, withdrawSaga);
}
