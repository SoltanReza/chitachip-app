import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { appActions } from '../App/slice';
import {
  addMessageApi,
  browseMessageApi,
  deleteMessageApi,
  editMessageApi,
} from './api';
import { actions } from './slice';
import {
  AddMessageRequest,
  BrowseMessageRequest,
  DeleteMessageRequest,
  EditMessageRequest,
} from './types';

export function* browseMessageSaga(
  action: PayloadAction<BrowseMessageRequest>,
) {
  try {
    const response = yield call(browseMessageApi, action.payload);

    yield put(actions.browseMessageSuccess(response));
  } catch (error) {
    yield put(actions.browseMessageError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* editMessageSaga(action: PayloadAction<EditMessageRequest>) {
  try {
    const response = yield call(editMessageApi, action.payload);

    yield put(actions.editMessageSuccess(response));
  } catch (error) {
    yield put(actions.editMessageError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* addMessageSaga(action: PayloadAction<AddMessageRequest>) {
  try {
    const response = yield call(addMessageApi, action.payload);

    yield put(actions.addMessageSuccess(response));
  } catch (error) {
    yield put(actions.addMessageError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* deleteMessageSaga(
  action: PayloadAction<DeleteMessageRequest>,
) {
  try {
    const response = yield call(deleteMessageApi, action.payload);

    yield put(actions.deleteMessageSuccess(response));
  } catch (error) {
    yield put(actions.deleteMessageError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* adminMessagePageSaga() {
  yield takeLatest(actions.browseMessage.type, browseMessageSaga);
  yield takeLatest(actions.editMessage.type, editMessageSaga);
  yield takeLatest(actions.addMessage.type, addMessageSaga);

  yield takeLatest(actions.deleteMessage.type, deleteMessageSaga);
}
