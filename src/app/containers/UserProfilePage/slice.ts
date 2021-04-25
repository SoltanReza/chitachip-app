import { PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, EditUserRequest, EditUserResponse } from './types';

// The initial state of the UserProfilePage container
export const initialState: ContainerState = {
  editUser: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
};

const userProfilePageSlice = createSlice({
  name: 'userProfilePage',
  initialState,
  reducers: {
    //#region editUser
    editUser(state, action: PayloadAction<EditUserRequest>) {
      state.editUser.params = action.payload;
      state.editUser.data = initialState.editUser.data;
      state.editUser.error = initialState.editUser.error;
    },
    editUserSuccess(state, action: PayloadAction<EditUserResponse>) {
      state.editUser.params = initialState.editUser.params;
      state.editUser.data = action.payload;
    },
    editUserError(state, action: PayloadAction<ErrorResponse>) {
      state.editUser.params = initialState.editUser.params;
      state.editUser.error = action.payload;
    },
    editUserClear(state) {
      state.editUser = initialState.editUser;
    },
    //#endregion editUser
  },
});

export const { actions, reducer, name: sliceKey } = userProfilePageSlice;
