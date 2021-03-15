import { PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  BrowseTransactionRequest,
  BrowseTransactionResponse,
  ContainerState,
} from './types';

// The initial state of the TransactionPage container
export const initialState: ContainerState = {
  browseTransaction: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
};

const transactionPageSlice = createSlice({
  name: 'transactionPage',
  initialState,
  reducers: {
    //#region browseTransaction
    browseTransaction(state, action: PayloadAction<BrowseTransactionRequest>) {
      state.browseTransaction.params = action.payload;
      state.browseTransaction.data = initialState.browseTransaction.data;
      state.browseTransaction.error = initialState.browseTransaction.error;
    },
    browseTransactionSuccess(
      state,
      action: PayloadAction<BrowseTransactionResponse>,
    ) {
      state.browseTransaction.params = initialState.browseTransaction.params;
      state.browseTransaction.data = action.payload;
    },
    browseTransactionError(state, action: PayloadAction<ErrorResponse>) {
      state.browseTransaction.params = initialState.browseTransaction.params;
      state.browseTransaction.error = action.payload;
    },
    browseTransactionClear(state) {
      state.browseTransaction = initialState.browseTransaction;
    },
    //#endregion browseTransaction
  },
});

export const { actions, reducer, name: sliceKey } = transactionPageSlice;
