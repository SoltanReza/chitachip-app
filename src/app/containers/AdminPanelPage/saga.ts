import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { appActions } from '../App/slice';
import { browseNewsApi } from './api';
import { actions } from './slice';
import { BrowseNewsRequest } from './types';

export function* browseNewsSaga(action: PayloadAction<BrowseNewsRequest>) {
  try {
    const response = yield call(browseNewsApi, action.payload);

    yield put(actions.browseNewsSuccess(response));
  } catch (error) {
    yield put(actions.browseNewsError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* adminPanelPageSaga() {
  yield takeLatest(actions.browseNews.type, browseNewsSaga);
}
