import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { appActions } from '../App/slice';
import { browseTransactionApi } from './api';
import { actions } from './slice';
import { BrowseTransactionRequest } from './types';

export function* browseTransactionSaga(
  action: PayloadAction<BrowseTransactionRequest>,
) {
  try {
    const response = yield call(browseTransactionApi, action.payload);

    yield put(actions.browseTransactionSuccess(response));
  } catch (error) {
    yield put(actions.browseTransactionError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* transactionPageSaga() {
  yield takeLatest(actions.browseTransaction.type, browseTransactionSaga);
}
