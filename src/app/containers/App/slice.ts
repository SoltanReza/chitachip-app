import { PayloadAction } from '@reduxjs/toolkit';
import Item from 'antd/lib/list/Item';
import { AuthData, ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { Storage } from 'utils/storage';

import {
  AddAgentRequest,
  AddAgentResponse,
  BrowseAgentListRequest,
  BrowseAgentListResponse,
  BrowseCurrencyRequest,
  BrowseCurrencyResponse,
  BrowseMessageRequest,
  BrowseMessageResponse,
  BrowsePackageGlobalListRequest,
  BrowsePackageGlobalListResponse,
  BrowseUserRequest,
  BrowseUserResponse,
  ContainerState,
  GetMyProfileRequest,
  GetMyProfileResponse,
  LoginRequest,
  LoginResponse,
  MessageStatus,
  Notif,
  NotifType,
  TicketStatus,
} from './types';

// The initial state of the App container
export const initialState: ContainerState = {
  notifications: [],

  login: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  getMyProfile: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  browseMessage: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  browseUser: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  browseCurrency: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  browsePackageGlobalList: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  browseAgentList: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  addAgent: {
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

    //#region getMyProfile
    getMyProfile(state, action: PayloadAction<GetMyProfileRequest>) {
      state.getMyProfile.params = action.payload;
      state.getMyProfile.data = initialState.getMyProfile.data;
      state.getMyProfile.error = initialState.getMyProfile.error;
    },
    getMyProfileSuccess(state, action: PayloadAction<GetMyProfileResponse>) {
      state.getMyProfile.params = initialState.getMyProfile.params;
      state.getMyProfile.data = action.payload;
    },
    getMyProfileError(state, action: PayloadAction<ErrorResponse>) {
      state.getMyProfile.params = initialState.getMyProfile.params;
      state.getMyProfile.error = action.payload;
    },
    getMyProfileClear(state) {
      state.getMyProfile = initialState.getMyProfile;
    },
    //#endregion getMyProfile

    //#region BrowseMessage
    browseMessage(state, action: PayloadAction<BrowseMessageRequest>) {
      state.browseMessage.params = action.payload;
      state.browseMessage.error = initialState.browseMessage.error;
    },
    browseMessageSuccess(state, action: PayloadAction<BrowseMessageResponse>) {
      state.browseMessage.params = initialState.browseMessage.params;

      if (!state.browseMessage.data) {
        state.browseMessage.data = action.payload;
      } else {
        state.browseMessage.data = {
          ...action.payload,
          data: [...state.browseMessage.data.data, ...action.payload.data],
        };
      }
    },
    browseMessageError(state, action: PayloadAction<ErrorResponse>) {
      state.browseMessage.params = initialState.browseMessage.params;
      state.browseMessage.error = action.payload;
    },
    browseMessageClear(state) {
      state.browseMessage = initialState.browseMessage;
    },
    //#endregion BrowseMessage

    //#region MarkMessageAsRead
    markMessageAsReadSuccess(state, action: PayloadAction<string>) {
      if (state.browseMessage.data) {
        state.browseMessage.data.data = state.browseMessage.data.data.map(
          message => ({
            ...message,
               
            status:
              message.id === +action.payload
                ? TicketStatus.READ
                : message.status,
          }),
        );

        if (state.browseMessage.data.payload) {
          state.browseMessage.data.payload = {
            ...state.browseMessage.data.payload,
            unread_count: state.browseMessage.data.payload.unread_count - 1,
          };
        }
      }
    },
    //#endregion MarkMessageAsRead

    //#region BrowseUser
    browseUser(state, action: PayloadAction<BrowseUserRequest>) {
      state.browseUser.params = action.payload;
      state.browseUser.data = initialState.browseUser.data;
      state.browseUser.error = initialState.browseUser.error;
    },
    browseUserSuccess(state, action: PayloadAction<BrowseUserResponse>) {
      state.browseUser.params = initialState.browseUser.params;
      state.browseUser.data = action.payload;
    },
    browseUserError(state, action: PayloadAction<ErrorResponse>) {
      state.browseUser.params = initialState.browseUser.params;
      state.browseUser.error = action.payload;
    },
    browseUserClear(state) {
      state.browseUser = initialState.browseUser;
    },
    //#endregion BrowseUser

    //#region browseCurrency
    browseCurrency(state, action: PayloadAction<BrowseCurrencyRequest>) {
      state.browseCurrency.params = action.payload;
      state.browseCurrency.data = initialState.browseCurrency.data;
      state.browseCurrency.error = initialState.browseCurrency.error;
    },
    browseCurrencySuccess(
      state,
      action: PayloadAction<BrowseCurrencyResponse>,
    ) {
      state.browseCurrency.params = initialState.browseCurrency.params;
      state.browseCurrency.data = action.payload;
    },
    browseCurrencyError(state, action: PayloadAction<ErrorResponse>) {
      state.browseCurrency.params = initialState.browseCurrency.params;
      state.browseCurrency.error = action.payload;
    },
    browseCurrencyClear(state) {
      state.browseCurrency = initialState.browseCurrency;
    },
    //#endregion browseCurrency

    //#region browsePackageGlobalList
    browsePackageGlobalList(
      state,
      action: PayloadAction<BrowsePackageGlobalListRequest>,
    ) {
      state.browsePackageGlobalList.params = action.payload;
      state.browsePackageGlobalList.data =
        initialState.browsePackageGlobalList.data;
      state.browsePackageGlobalList.error =
        initialState.browsePackageGlobalList.error;
    },
    browsePackageGlobalListSuccess(
      state,
      action: PayloadAction<BrowsePackageGlobalListResponse>,
    ) {
      state.browsePackageGlobalList.params =
        initialState.browsePackageGlobalList.params;
      state.browsePackageGlobalList.data = action.payload;
    },
    browsePackageGlobalListError(state, action: PayloadAction<ErrorResponse>) {
      state.browsePackageGlobalList.params =
        initialState.browsePackageGlobalList.params;
      state.browsePackageGlobalList.error = action.payload;
    },
    browsePackageGlobalListClear(state) {
      state.browsePackageGlobalList = initialState.browsePackageGlobalList;
    },
    //#endregion browsePackageGlobalList

    //#region BrowseAgentList
    browseAgentList(state, action: PayloadAction<BrowseAgentListRequest>) {
      state.browseAgentList.params = action.payload;
      state.browseAgentList.data = initialState.browseAgentList.data;
      state.browseAgentList.error = initialState.browseAgentList.error;
    },
    browseAgentListSuccess(
      state,
      action: PayloadAction<BrowseAgentListResponse>,
    ) {
      state.browseAgentList.params = initialState.browseAgentList.params;
      state.browseAgentList.data = action.payload;
    },
    browseAgentListError(state, action: PayloadAction<ErrorResponse>) {
      state.browseAgentList.params = initialState.browseAgentList.params;
      state.browseAgentList.error = action.payload;
    },
    browseAgentListClear(state) {
      state.browseAgentList = initialState.browseAgentList;
    },
    //#endregion BrowseAgentList

    //#region AddAgent
    addAgent(state, action: PayloadAction<AddAgentRequest>) {
      state.addAgent.params = action.payload;
      state.addAgent.data = initialState.addAgent.data;
      state.addAgent.error = initialState.addAgent.error;
    },
    addAgentSuccess(state, action: PayloadAction<AddAgentResponse>) {
      if (state.auth) {
        if (state.auth.role === 'REGULAR') {
          if (state.auth.user.balances) {
            if (state.auth.user.id === state.addAgent.params?.user_id) {
              state.auth.user.balances = state.auth.user.balances.map(u =>
                u.currency_id === action.payload.currency_id
                  ? {
                      ...u,
                      agent_id: action.payload.agent_id,
                      agent_name: action.payload.agent_name,
                    }
                  : u,
              );
            }
          }
        }
      }
      state.addAgent.params = initialState.addAgent.params;
      state.addAgent.data = action.payload;
    },
    addAgentError(state, action: PayloadAction<ErrorResponse>) {
      state.addAgent.params = initialState.addAgent.params;
      state.addAgent.error = action.payload;
    },
    addAgentClear(state) {
      state.addAgent = initialState.addAgent;
    },
    //#endregion AddAgent
  },
});

export const {
  actions,
  actions: appActions,
  reducer,
  name: sliceKey,
} = appSlice;
