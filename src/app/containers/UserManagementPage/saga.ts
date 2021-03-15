import { PayloadAction } from '@reduxjs/toolkit';
import { DATE_FORMAT_WITH_TIME } from 'app/containers/App/constants';
import { translations } from 'locales/i18n';
import moment from 'moment';
import { call, put, takeLatest } from 'redux-saga/effects';
import { downloadBlobLink } from 'utils/helpers';
import { redirect } from 'utils/history';
import { Routes } from '../App/Router/routes';
import { appActions } from '../App/slice';
import {
  addUsersApi,
  browseUsersApi,
  editUsersApi,
  exportUsersApi,
  importFinancialApi,
  importUsersApi,
  modifyCurrencyTypeApi,
} from './api';
import { actions } from './slice';
import {
  AddUsersRequest,
  BrowseUsersRequest,
  EditUsersRequest,
  ExportUsersRequest,
  ImportFinancialRequest,
  ImportUsersRequest,
  ModifyCurrencyTypeRequest,
} from './types';

export function* browseUsersSaga(action: PayloadAction<BrowseUsersRequest>) {
  try {
    const response = yield call(browseUsersApi, action.payload);
    yield put(actions.browseUsersSuccess(response));
  } catch (error) {
    yield put(actions.browseUsersError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* editUsersSaga(action: PayloadAction<EditUsersRequest>) {
  try {
    const response = yield call(editUsersApi, action.payload);
    yield put(actions.editUsersSuccess(response));
  } catch (error) {
    yield put(actions.editUsersError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* addUsersSaga(action: PayloadAction<AddUsersRequest>) {
  try {
    const response = yield call(addUsersApi, action.payload);
    yield put(actions.AddUsersSuccess(response));
    yield put(
      appActions.notifySuccess(
        translations.pages.UserManagementPage.add.successMessage,
      ),
    );
  } catch (error) {
    yield put(actions.AddUsersError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* exportUsersSaga(action: PayloadAction<ExportUsersRequest>) {
  try {
    const response = yield call(exportUsersApi, action.payload);
    downloadBlobLink(response.url, moment().format(DATE_FORMAT_WITH_TIME));
    yield put(actions.exportUsersSuccess(response));
    yield put(
      appActions.notifySuccess(
        translations.pages.UserManagementPage.export.successMessage,
      ),
    );
  } catch (error) {
    yield put(actions.exportUsersError(error));
    yield put(
      appActions.notifyError(
        translations.pages.UserManagementPage.export.errorMessage,
      ),
    );
  }
}

export function* importUsersSaga(action: PayloadAction<ImportUsersRequest>) {
  try {
    const response = yield call(importUsersApi, action.payload);

    yield put(
      appActions.notifySuccess(
        translations.pages.UserManagementPage.import.successMessage,
      ),
    );
    yield put(actions.importUsersSuccess(response));
    yield redirect(Routes.userManagement);
  } catch (error) {
    yield put(appActions.notifyError(error.message));
    yield put(actions.importUsersError(error));
  }
}

export function* importFinancialSaga(
  action: PayloadAction<ImportFinancialRequest>,
) {
  try {
    const response = yield call(importFinancialApi, action.payload);

    yield put(
      appActions.notifySuccess(
        translations.pages.UserManagementPage.import.successMessage,
      ),
    );
    yield put(actions.importFinancialSuccess(response));
    yield redirect(Routes.userManagement);
  } catch (error) {
    yield put(appActions.notifyError(error.message));
    yield put(actions.importFinancialError(error));
  }
}

export function* modifyCurrencyTypeSaga(
  action: PayloadAction<ModifyCurrencyTypeRequest>,
) {
  try {
    const response = yield call(modifyCurrencyTypeApi, action.payload);

    yield put(actions.modifyCurrencyTypeSuccess(response));
    yield put(
      appActions.notifySuccess(
        translations.pages.UserManagementPage.modifyCurrencyType.successMessage,
      ),
    );
  } catch (error) {
    yield put(appActions.notifyError(error.message));
    yield put(actions.modifyCurrencyTypeError(error));
  }
}

export function* userManagementPageSaga() {
  yield takeLatest(actions.browseUsers.type, browseUsersSaga);
  yield takeLatest(actions.editUsers.type, editUsersSaga);
  yield takeLatest(actions.AddUsers.type, addUsersSaga);
  yield takeLatest(actions.exportUsers.type, exportUsersSaga);
  yield takeLatest(actions.importUsers.type, importUsersSaga);
  yield takeLatest(actions.importFinancial.type, importFinancialSaga);
  yield takeLatest(actions.modifyCurrencyType.type, modifyCurrencyTypeSaga);
}
