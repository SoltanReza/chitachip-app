import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the FinalFormPage container
export const initialState: ContainerState = {};

const finalFormPageSlice = createSlice({
  name: 'finalFormPage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = finalFormPageSlice;
