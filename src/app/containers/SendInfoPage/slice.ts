import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the SendInfoPage container
export const initialState: ContainerState = {};

const sendInfoPageSlice = createSlice({
  name: 'sendInfoPage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = sendInfoPageSlice;
