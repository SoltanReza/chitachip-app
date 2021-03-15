import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the TradInfoPage container
export const initialState: ContainerState = {};

const tradInfoPageSlice = createSlice({
  name: 'tradInfoPage',
  initialState,
  reducers: {},
});

export const { actions, reducer, name: sliceKey } = tradInfoPageSlice;
