import { PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, WithdrawRequest, WithdrawResponse } from './types';

// The initial state of the RechargePage container
export const initialState: ContainerState = {
  withdraw: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
};

const rechargePageSlice = createSlice({
  name: 'rechargePage',
  initialState,
  reducers: {
    //#region withdraw
    withdraw(state, action: PayloadAction<WithdrawRequest>) {
      state.withdraw.params = action.payload;
      state.withdraw.data = initialState.withdraw.data;
      state.withdraw.error = initialState.withdraw.error;
    },
    withdrawSuccess(state, action: PayloadAction<WithdrawResponse>) {
      // if (state.withdraw.params) {
      //   if (state.browseCurrency.data) {
      //     state.browseCurrency.data.data.push(state.withdraw.params);
      //   } else {
      //     state.browseCurrency.data = {
      //       data: [state.withdraw.params],
      //       pagination: {
      //         total: 1,
      //         count: 1,
      //         per_page: 1,
      //         current_page: 1,
      //         total_pages: 1,
      //       },
      //     };
      //   }
      // }

      state.withdraw.params = initialState.withdraw.params;
      state.withdraw.data = action.payload;
    },
    withdrawError(state, action: PayloadAction<ErrorResponse>) {
      state.withdraw.params = initialState.withdraw.params;
      state.withdraw.error = action.payload;
    },
    withdrawClear(state) {
      state.withdraw = initialState.withdraw;
    },
    //#endregion withdraw
  },
});

export const { actions, reducer, name: sliceKey } = rechargePageSlice;
