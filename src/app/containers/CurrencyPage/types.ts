import { ErrorResponse, PaginationRequest, PaginationResponse } from 'types';
import { Currency } from 'app/containers/App/types';

/* --- STATE --- */
export interface CurrencyPageState {
  browseCurrency: {
    params?: BrowseCurrencyRequest;
    data?: BrowseCurrencyResponse;
    error?: ErrorResponse;
  };
  editCurrency: {
    params?: EditCurrencyRequest;
    data?: EditCurrencyResponse;
    error?: ErrorResponse;
  };
  addCurrency: {
    params?: AddCurrencyRequest;
    data?: AddCurrencyResponse;
    error?: ErrorResponse;
  };
}

export type ContainerState = CurrencyPageState;

// #region BrowseCurrency
export interface BrowseCurrencyRequest extends PaginationRequest {}
export interface BrowseCurrencyResponse extends PaginationResponse<Currency> {}
// #endregion BrowseCurrency

// #region EditCurrency
export interface EditCurrencyRequest {
  name: string;
  rate_in_rial: number;
}
export interface EditCurrencyResponse {}
// #endregion EditCurrency

// #region addCurrency
export interface AddCurrencyRequest {
  name: string;
  rate_in_rial: number;
}
export interface AddCurrencyResponse {}
// #endregion addCurrency
