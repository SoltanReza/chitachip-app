import { PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  AddUsersRequest,
  AddUsersResponse,
  BrowseUsersRequest,
  BrowseUsersResponse,
  ContainerState,
  EditUsersRequest,
  EditUsersResponse,
  ExportUsersRequest,
  ExportUsersResponse,
  ImportFinancialRequest,
  ImportFinancialResponse,
  ImportUsersRequest,
  ImportUsersResponse,
  ModifyCurrencyTypeRequest,
  ModifyCurrencyTypeResponse,
} from './types';

// The initial state of the UserManagementPage container
export const initialState: ContainerState = {
  browseUsers: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  editUsers: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  AddUsers: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  exportUsers: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  importUsers: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  importFinancial: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  modifyCurrencyType: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
};

const userManagementPageSlice = createSlice({
  name: 'userManagementPage',
  initialState,
  reducers: {
    //#region browseUsers
    browseUsers(state, action: PayloadAction<BrowseUsersRequest>) {
      state.browseUsers.params = action.payload;
      state.browseUsers.data = initialState.browseUsers.data;
      state.browseUsers.error = initialState.browseUsers.error;
    },
    browseUsersSuccess(state, action: PayloadAction<BrowseUsersResponse>) {
      state.browseUsers.params = initialState.browseUsers.params;
      state.browseUsers.data = action.payload;
    },
    browseUsersError(state, action: PayloadAction<ErrorResponse>) {
      state.browseUsers.params = initialState.browseUsers.params;
      state.browseUsers.error = action.payload;
    },
    browseUsersClear(state) {
      state.browseUsers = initialState.browseUsers;
    },
    //#endregion browseUsers

    //#region editUsers
    editUsers(state, action: PayloadAction<EditUsersRequest>) {
      state.editUsers.params = action.payload;
      state.editUsers.data = initialState.editUsers.data;
      state.editUsers.error = initialState.editUsers.error;
    },
    editUsersSuccess(state, action: PayloadAction<EditUsersResponse>) {
      if (state.browseUsers.data) {
        state.browseUsers.data.data = state.browseUsers.data?.data.map(user => {
          return user.id === state.editUsers.params?.id
            ? {
                ...user,
                profile: state.editUsers.params?.profile,
              }
            : user;
        });
      }
      state.editUsers.params = initialState.editUsers.params;
      state.editUsers.data = action.payload;
    },
    editUsersError(state, action: PayloadAction<ErrorResponse>) {
      state.editUsers.params = initialState.editUsers.params;
      state.editUsers.error = action.payload;
    },
    editUsersClear(state) {
      state.editUsers = initialState.editUsers;
    },
    //#endregion editUsers

    //#region AddUsers
    AddUsers(state, action: PayloadAction<AddUsersRequest>) {
      state.AddUsers.params = action.payload;
      state.AddUsers.data = initialState.AddUsers.data;
      state.AddUsers.error = initialState.AddUsers.error;
    },
    AddUsersSuccess(state, action: PayloadAction<AddUsersResponse>) {
      if (state.browseUsers.data) {
        state.browseUsers.data.data.push(action.payload);
      } else {
        state.browseUsers.data = {
          data: [action.payload],
          pagination: {
            total: 1,
            count: 1,
            per_page: 1,
            current_page: 1,
            total_pages: 1,
          },
        };
      }

      state.AddUsers.params = initialState.AddUsers.params;
      state.AddUsers.data = action.payload;
    },
    AddUsersError(state, action: PayloadAction<ErrorResponse>) {
      state.AddUsers.params = initialState.AddUsers.params;
      state.AddUsers.error = action.payload;
    },
    AddUsersClear(state) {
      state.AddUsers = initialState.AddUsers;
    },
    //#endregion AddUsers

    //#region ExportUsers
    exportUsers(state, action: PayloadAction<ExportUsersRequest>) {
      state.exportUsers.params = action.payload;
      state.exportUsers.data = initialState.exportUsers.data;
      state.exportUsers.error = initialState.exportUsers.error;
    },
    exportUsersSuccess(state, action: PayloadAction<ExportUsersResponse>) {
      state.exportUsers.params = initialState.exportUsers.params;
      state.exportUsers.data = action.payload;
    },
    exportUsersError(state, action: PayloadAction<ErrorResponse>) {
      state.exportUsers.params = initialState.exportUsers.params;
      state.exportUsers.error = action.payload;
    },
    exportUsersClear(state) {
      state.exportUsers = initialState.exportUsers;
    },
    //#endregion ExportUsers

    //#region ImportUsers
    importUsers(state, action: PayloadAction<ImportUsersRequest>) {
      state.importUsers.params = action.payload;
      state.importUsers.data = initialState.importUsers.data;
      state.importUsers.error = initialState.importUsers.error;
    },
    importUsersSuccess(state, action: PayloadAction<ImportUsersResponse>) {
      state.importUsers.params = initialState.importUsers.params;
      state.importUsers.data = action.payload;
    },
    importUsersError(state, action: PayloadAction<ErrorResponse>) {
      state.importUsers.params = initialState.importUsers.params;
      state.importUsers.error = action.payload;
    },
    importUsersClear(state) {
      state.importUsers = initialState.importUsers;
    },
    //#endregion ImportUsers

    //#region ImportFinancial
    importFinancial(state, action: PayloadAction<ImportFinancialRequest>) {
      state.importFinancial.params = action.payload;
      state.importFinancial.data = initialState.importFinancial.data;
      state.importFinancial.error = initialState.importFinancial.error;
    },
    importFinancialSuccess(
      state,
      action: PayloadAction<ImportFinancialResponse>,
    ) {
      state.importFinancial.params = initialState.importFinancial.params;
      state.importFinancial.data = action.payload;
    },
    importFinancialError(state, action: PayloadAction<ErrorResponse>) {
      state.importFinancial.params = initialState.importFinancial.params;
      state.importFinancial.error = action.payload;
    },
    importFinancialClear(state) {
      state.importFinancial = initialState.importFinancial;
    },
    //#endregion ImportFinancial

    //#region ModifyCurrencyType
    modifyCurrencyType(
      state,
      action: PayloadAction<ModifyCurrencyTypeRequest>,
    ) {
      state.modifyCurrencyType.params = action.payload;
      state.modifyCurrencyType.data = initialState.modifyCurrencyType.data;
      state.modifyCurrencyType.error = initialState.modifyCurrencyType.error;
    },
    modifyCurrencyTypeSuccess(
      state,
      action: PayloadAction<ModifyCurrencyTypeResponse>,
    ) {
      if (state.browseUsers.data?.data) {
        state.browseUsers.data.data = state.browseUsers.data.data.map(u =>
          u.id === state.modifyCurrencyType.params?.user_id
            ? {
                ...u,

                balances: u.balances
                  ? u.balances.map(b =>
                      b.currency_id ===
                      state.modifyCurrencyType.params?.currency_id
                        ? action.payload
                        : b,
                    )
                  : [],
              }
            : u,
        );
      }
      state.modifyCurrencyType.params = initialState.modifyCurrencyType.params;
      state.modifyCurrencyType.data = action.payload;
    },
    modifyCurrencyTypeError(state, action: PayloadAction<ErrorResponse>) {
      state.modifyCurrencyType.params = initialState.modifyCurrencyType.params;
      state.modifyCurrencyType.error = action.payload;
    },
    modifyCurrencyTypeClear(state) {
      state.modifyCurrencyType = initialState.modifyCurrencyType;
    },
    //#endregion ModifyCurrencyType
  },
});

export const { actions, reducer, name: sliceKey } = userManagementPageSlice;
