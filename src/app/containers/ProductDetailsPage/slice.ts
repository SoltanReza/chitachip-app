import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the ProductDetailsPage container
export const initialState: ContainerState = {};

const productDetailsPageSlice = createSlice({
  name: 'productDetailsPage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = productDetailsPageSlice;
