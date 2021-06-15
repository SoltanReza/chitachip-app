import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the PaymentCallbackPage container
export const initialState: ContainerState = {};

const paymentCallbackPageSlice = createSlice({
  name: 'paymentCallbackPage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = paymentCallbackPageSlice;
