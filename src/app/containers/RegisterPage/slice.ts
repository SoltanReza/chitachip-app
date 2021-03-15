import { PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, RegisterRequest, RegisterResponse } from './types';

// The initial state of the RegisterPage container
export const initialState: ContainerState = {
  register: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
};

const registerPageSlice = createSlice({
  name: 'registerPage',
  initialState,
  reducers: {
    register(state, action: PayloadAction<RegisterRequest>) {
      state.register.params = action.payload;
      state.register.data = initialState.register.data;
      state.register.error = initialState.register.error;
    },
    registerSuccess(state, action: PayloadAction<RegisterResponse>) {
      state.register.params = initialState.register.params;
      state.register.data = action.payload;
    },
    registerError(state, action: PayloadAction<ErrorResponse>) {
      state.register.params = initialState.register.params;
      state.register.error = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = registerPageSlice;
