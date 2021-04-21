import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the UserProfilePage container
export const initialState: ContainerState = {};

const userProfilePageSlice = createSlice({
  name: 'userProfilePage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = userProfilePageSlice;
