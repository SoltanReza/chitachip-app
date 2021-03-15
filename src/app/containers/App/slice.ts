import { PayloadAction } from '@reduxjs/toolkit';
import { AuthData, ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { Storage } from 'utils/storage';
import {
  ContainerState,
  LoginRequest,
  LoginResponse,
  Notif,
  NotifType,
} from './types';

// The initial state of the App container
export const initialState: ContainerState = {
  notifications: [],

  login: {
    params: undefined,
    data: undefined,
    error: undefined,
  },

  auth: Storage.read<AuthData>('auth', undefined),
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // #region notify
    notify(state, action: PayloadAction<Notif>) {
      state.notifications = [...state.notifications, action.payload];
    },
    notifySuccess(state, action: PayloadAction<string>) {
      state.notifications = [
        ...state.notifications,
        { message: action.payload, type: NotifType.SUCCESS },
      ];
    },
    notifyError(state, action: PayloadAction<string>) {
      state.notifications = [
        ...state.notifications,
        { message: action.payload, type: NotifType.ERROR },
      ];
    },
    notifyWarning(state, action: PayloadAction<string>) {
      state.notifications = [
        ...state.notifications,
        { message: action.payload, type: NotifType.WARNING },
      ];
    },
    notifyInfo(state, action: PayloadAction<string>) {
      state.notifications = [
        ...state.notifications,
        { message: action.payload, type: NotifType.INFO },
      ];
    },
    notifyClear(state) {
      state.notifications = [];
    },
    // #endregion notify

    //#region login
    login(state, action: PayloadAction<LoginRequest>) {
      state.login.params = action.payload;
      state.login.data = initialState.login.data;
      state.login.error = initialState.login.error;
    },
    loginSuccess(state, action: PayloadAction<LoginResponse>) {
      state.login.params = initialState.login.params;
      state.login.data = action.payload;
    },
    loginError(state, action: PayloadAction<ErrorResponse>) {
      state.login.params = initialState.login.params;
      state.login.error = action.payload;
    },
    loginClear(state) {
      state.login = initialState.login;
    },
    //#endregion login

    //#region auth
    setAuth: (state, action: PayloadAction<AuthData>) => {
      state.auth = action.payload;
    },
    clearAuth: state => {
      state.auth = undefined;
    },
    //#endregion auth
  },
});

export const {
  actions,
  actions: appActions,
  reducer,
  name: sliceKey,
} = appSlice;
