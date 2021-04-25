import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the ResetPasswordPage container
export const initialState: ContainerState = {};

const resetPasswordPageSlice = createSlice({
  name: 'resetPasswordPage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = resetPasswordPageSlice;
