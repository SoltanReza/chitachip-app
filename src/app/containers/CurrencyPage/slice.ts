import { PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  AddCurrencyRequest,
  AddCurrencyResponse,
  BrowseCurrencyRequest,
  BrowseCurrencyResponse,
  ContainerState,
  EditCurrencyRequest,
  EditCurrencyResponse,
} from './types';

// The initial state of the CurrencyPage container
export const initialState: ContainerState = {
  browseCurrency: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  addCurrency: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  editCurrency: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
};

const currencyPageSlice = createSlice({
  name: 'currencyPage',
  initialState,
  reducers: {
    //#region browseCurrency
    browseCurrency(state, action: PayloadAction<BrowseCurrencyRequest>) {
      state.browseCurrency.params = action.payload;
      state.browseCurrency.data = initialState.browseCurrency.data;
      state.browseCurrency.error = initialState.browseCurrency.error;
    },
    browseCurrencySuccess(
      state,
      action: PayloadAction<BrowseCurrencyResponse>,
    ) {
      state.browseCurrency.params = initialState.browseCurrency.params;
      state.browseCurrency.data = action.payload;
    },
    browseCurrencyError(state, action: PayloadAction<ErrorResponse>) {
      state.browseCurrency.params = initialState.browseCurrency.params;
      state.browseCurrency.error = action.payload;
    },
    browseCurrencyClear(state) {
      state.browseCurrency = initialState.browseCurrency;
    },
    //#endregion browseCurrency

    //#region addCurrency
    addCurrency(state, action: PayloadAction<AddCurrencyRequest>) {
      state.addCurrency.params = action.payload;
      state.addCurrency.data = initialState.addCurrency.data;
      state.addCurrency.error = initialState.addCurrency.error;
    },
    addCurrencySuccess(state, action: PayloadAction<AddCurrencyResponse>) {
      if (state.addCurrency.params) {
        if (state.browseCurrency.data) {
          state.browseCurrency.data.data.push(state.addCurrency.params);
        } else {
          state.browseCurrency.data = {
            data: [state.addCurrency.params],
            pagination: {
              total: 1,
              count: 1,
              per_page: 1,
              current_page: 1,
              total_pages: 1,
            },
          };
        }
      }

      state.addCurrency.params = initialState.addCurrency.params;
      state.addCurrency.data = action.payload;
    },
    addCurrencyError(state, action: PayloadAction<ErrorResponse>) {
      state.addCurrency.params = initialState.addCurrency.params;
      state.addCurrency.error = action.payload;
    },
    addCurrencyClear(state) {
      state.addCurrency = initialState.addCurrency;
    },
    //#endregion addCurrency

    //#region editCurrency
    editCurrency(state, action: PayloadAction<EditCurrencyRequest>) {
      state.editCurrency.params = action.payload;
      state.editCurrency.data = initialState.editCurrency.data;
      state.editCurrency.error = initialState.editCurrency.error;
    },
    editCurrencySuccess(state, action: PayloadAction<EditCurrencyResponse>) {
      if (state.browseCurrency.data) {
        state.browseCurrency.data.data = state.browseCurrency.data.data.map(
          currency => {
            return currency.name === state.editCurrency.params?.name
              ? {
                  ...currency,
                  rate_in_rial: state.editCurrency.params?.rate_in_rial,
                }
              : currency;
          },
        );
      }
      state.editCurrency.params = initialState.editCurrency.params;
      state.editCurrency.data = action.payload;
    },
    editCurrencyError(state, action: PayloadAction<ErrorResponse>) {
      state.editCurrency.params = initialState.editCurrency.params;
      state.editCurrency.error = action.payload;
    },
    editCurrencyClear(state) {
      state.editCurrency = initialState.editCurrency;
    },
    //#endregion editCurrency
  },
});

export const { actions, reducer, name: sliceKey } = currencyPageSlice;
