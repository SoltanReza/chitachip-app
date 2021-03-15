import { PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  ContainerState,
  EditProfileRequest,
  EditProfileResponse,
} from './types';

// The initial state of the ProfilePage container
export const initialState: ContainerState = {
  editProfile: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
};

const profilePageSlice = createSlice({
  name: 'profilePage',
  initialState,
  reducers: {
    //#region editProfile
    editProfile(state, action: PayloadAction<EditProfileRequest>) {
      state.editProfile.params = action.payload;
      state.editProfile.data = initialState.editProfile.data;
      state.editProfile.error = initialState.editProfile.error;
    },
    editProfileSuccess(state, action: PayloadAction<EditProfileResponse>) {
      state.editProfile.params = initialState.editProfile.params;
      state.editProfile.data = action.payload;
    },
    editProfileError(state, action: PayloadAction<ErrorResponse>) {
      state.editProfile.params = initialState.editProfile.params;
      state.editProfile.error = action.payload;
    },
    editProfileClear(state) {
      state.editProfile = initialState.editProfile;
    },
    //#endregion editProfile
  },
});

export const { actions, reducer, name: sliceKey } = profilePageSlice;
