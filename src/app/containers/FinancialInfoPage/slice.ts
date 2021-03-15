import { PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  BrowseFinancialInfoRequest,
  BrowseFinancialInfoResponse,
  ContainerState,
} from './types';

// The initial state of the FinancialInfoPage container
export const initialState: ContainerState = {
  browseFinancialInfo: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
};

const financialInfoPageSlice = createSlice({
  name: 'financialInfoPage',
  initialState,
  reducers: {
    //#region browseFinancialInfo
    browseFinancialInfo(
      state,
      action: PayloadAction<BrowseFinancialInfoRequest>,
    ) {
      state.browseFinancialInfo.params = action.payload;
      state.browseFinancialInfo.data = initialState.browseFinancialInfo.data;
      state.browseFinancialInfo.error = initialState.browseFinancialInfo.error;
    },
    browseFinancialInfoSuccess(
      state,
      action: PayloadAction<BrowseFinancialInfoResponse>,
    ) {
      state.browseFinancialInfo.params =
        initialState.browseFinancialInfo.params;
      state.browseFinancialInfo.data = action.payload;
    },
    browseFinancialInfoError(state, action: PayloadAction<ErrorResponse>) {
      state.browseFinancialInfo.params =
        initialState.browseFinancialInfo.params;
      state.browseFinancialInfo.error = action.payload;
    },
    browseFinancialInfoClear(state) {
      state.browseFinancialInfo = initialState.browseFinancialInfo;
    },
    //#endregion browseFinancialInfo
  },
});

export const { actions, reducer, name: sliceKey } = financialInfoPageSlice;
