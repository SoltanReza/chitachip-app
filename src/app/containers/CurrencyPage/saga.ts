import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { appActions } from '../App/slice';
import { addCurrencyApi, browseCurrencyApi, editCurrencyApi } from './api';
import { actions } from './slice';
import {
  AddCurrencyRequest,
  BrowseCurrencyRequest,
  EditCurrencyRequest,
} from './types';

export function* browseCurrencySaga(
  action: PayloadAction<BrowseCurrencyRequest>,
) {
  try {
    const response = yield call(browseCurrencyApi, action.payload);

    yield put(actions.browseCurrencySuccess(response));
  } catch (error) {
    yield put(actions.browseCurrencyError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* editCurrencySaga(action: PayloadAction<EditCurrencyRequest>) {
  try {
    const response = yield call(editCurrencyApi, action.payload);

    yield put(actions.editCurrencySuccess(response));
  } catch (error) {
    yield put(actions.editCurrencyError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* addCurrencySaga(action: PayloadAction<AddCurrencyRequest>) {
  try {
    const response = yield call(addCurrencyApi, action.payload);

    yield put(actions.addCurrencySuccess(response));
  } catch (error) {
    yield put(actions.addCurrencyError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* currencyPageSaga() {
  yield takeLatest(actions.browseCurrency.type, browseCurrencySaga);
  yield takeLatest(actions.editCurrency.type, editCurrencySaga);
  yield takeLatest(actions.addCurrency.type, addCurrencySaga);
}
