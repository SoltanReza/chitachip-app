import { PayloadAction } from '@reduxjs/toolkit';
import { translations } from 'locales/i18n';
import { call, put, takeLatest } from 'redux-saga/effects';
import { redirect } from 'utils/history';
import { Routes } from '../App/Router/routes';
import { appActions } from '../App/slice';
import { addNewsApi, browseNewsApi, editNewsApi, uploadImageApi } from './api';
import { actions } from './slice';
import {
  AddNewsRequest,
  BrowseNewsRequest,
  EditNewsRequest,
  UploadImageRequest,
} from './types';

export function* browseNewsSaga(action: PayloadAction<BrowseNewsRequest>) {
  try {
    const response = yield call(browseNewsApi, action.payload);

    yield put(actions.browseNewsSuccess(response));
  } catch (error) {
    yield put(actions.browseNewsError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* editNewsSaga(action: PayloadAction<EditNewsRequest>) {
  try {
    const response = yield call(editNewsApi, action.payload);
    yield put(actions.editNewsSuccess(response));
  } catch (error) {
    yield put(actions.editNewsError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* addNewsSaga(action: PayloadAction<AddNewsRequest>) {
  try {
    const response = yield call(addNewsApi, action.payload);

    yield put(actions.addNewsSuccess(response));
  } catch (error) {
    yield put(actions.addNewsError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* uploadImageSaga(action: PayloadAction<UploadImageRequest>) {
  try {
    const response = yield call(uploadImageApi, action.payload);

    yield put(
      appActions.notifySuccess(
        translations.pages.NewsPage.uploadImage.successMessage,
      ),
    );
    yield put(actions.uploadImageSuccess(response));
    yield redirect(Routes.dashboard);
  } catch (error) {
    yield put(appActions.notifyError(error.message));
    yield put(actions.uploadImageError(error));
  }
}

export function* newsPageSaga() {
  yield takeLatest(actions.browseNews.type, browseNewsSaga);
  yield takeLatest(actions.editNews.type, editNewsSaga);
  yield takeLatest(actions.addNews.type, addNewsSaga);
  yield takeLatest(actions.uploadImage.type, uploadImageSaga);
}
