import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { appActions } from '../App/slice';
import { addTicketApi, browseTicketApi } from './api';
import { actions } from './slice';
import { AddTicketRequest, BrowseTicketRequest } from './types';

export function* browseTicketSaga(action: PayloadAction<BrowseTicketRequest>) {
  try {
    const response = yield call(browseTicketApi, action.payload);
    yield put(actions.browseTicketSuccess(response));
  } catch (error) {
    yield put(actions.browseTicketError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* addTicketSaga(action: PayloadAction<AddTicketRequest>) {
  try {
    const response = yield call(addTicketApi, action.payload);
    yield put(actions.addTicketSuccess(response));
    yield put(actions.browseTicket({}));
  } catch (error) {
    yield put(actions.addTicketError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* ticketPageSaga() {
  yield takeLatest(actions.browseTicket.type, browseTicketSaga);
  yield takeLatest(actions.addTicket.type, addTicketSaga);
}
