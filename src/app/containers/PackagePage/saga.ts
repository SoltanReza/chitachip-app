import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { appActions } from '../App/slice';
import { addPackageApi, browsePackageApi, editPackageApi } from './api';
import { actions } from './slice';
import {
  AddPackageRequest,
  BrowsePackageRequest,
  EditPackageRequest,
} from './types';

export function* browsePackageSaga(
  action: PayloadAction<BrowsePackageRequest>,
) {
  try {
    const response = yield call(browsePackageApi, action.payload);
    yield put(actions.browsePackageSuccess(response));
  } catch (error) {
    yield put(actions.browsePackageError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* editPackageSaga(action: PayloadAction<EditPackageRequest>) {
  try {
    const response = yield call(editPackageApi, action.payload);
    console.log(response);
    yield put(actions.editPackageSuccess(response));
  } catch (error) {
    yield put(actions.editPackageError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* addPackageSaga(action: PayloadAction<AddPackageRequest>) {
  try {
    const response = yield call(addPackageApi, action.payload);
    yield put(actions.addPackageSuccess(response));
  } catch (error) {
    yield put(actions.addPackageError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* packagePageSaga() {
  yield takeLatest(actions.browsePackage.type, browsePackageSaga);
  yield takeLatest(actions.editPackage.type, editPackageSaga);
  yield takeLatest(actions.addPackage.type, addPackageSaga);
}
