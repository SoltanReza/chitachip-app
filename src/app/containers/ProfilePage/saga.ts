import { PayloadAction } from '@reduxjs/toolkit';
import { translations } from 'locales/i18n';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { AuthData } from 'types';
import { Storage } from 'utils/storage';
import { selectAuthData } from '../App/selectors';
import { appActions } from '../App/slice';
import { editProfileApi } from './api';
import { actions } from './slice';
import { EditProfileRequest } from './types';

export function* editProfileSaga(action: PayloadAction<EditProfileRequest>) {
  try {
    const response = yield call(editProfileApi, action.payload);

    const authData: AuthData = yield select(selectAuthData);
    if (authData) {
      const newAuthData: AuthData = {
        ...authData,
        user: {
          ...authData.user,
          profile: {
            ...authData.user.profile,
            ...action.payload.profile,
          },
        },
      };
      Storage.put('auth', newAuthData);
      yield put(appActions.setAuth(newAuthData));
    }

    yield put(actions.editProfileSuccess(response));

    yield put(
      appActions.notifySuccess(
        translations.pages.ProfilePage.updateSuccessMessage,
      ),
    );
  } catch (error) {
    yield put(actions.editProfileError(error));
    yield put(appActions.notifyError(error.message));
  }
}

export function* profilePageSaga() {
  yield takeLatest(actions.editProfile.type, editProfileSaga);
}
