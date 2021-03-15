import { PayloadAction } from '@reduxjs/toolkit';
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { appActions } from '../App/slice';
import { browseFinancialInfoApi } from './api';
import { actions } from './slice';
import { BrowseFinancialInfoRequest } from './types';

export function* browseFinancialInfoSaga(
  action: PayloadAction<BrowseFinancialInfoRequest>,
) {
  try {
    const response = yield call(browseFinancialInfoApi, action.payload);

    yield put(actions.browseFinancialInfoSuccess(response));
  } catch (error) {
    yield put(actions.browseFinancialInfoError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* financialInfoPageSaga() {
  yield takeLatest(actions.browseFinancialInfo.type, browseFinancialInfoSaga);
}
