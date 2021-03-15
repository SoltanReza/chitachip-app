import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import {
  BrowseCurrencyRequest,
  BrowseCurrencyResponse,
  EditCurrencyRequest,
  EditCurrencyResponse,
} from '../types';

export function browseCurrencyApi(
  params: BrowseCurrencyRequest,
): Promise<ErrorResponse | BrowseCurrencyResponse> {
  return http.get('/currencies').then(response => response.data);
}

export function editCurrencyApi(
  params: EditCurrencyRequest,
): Promise<ErrorResponse | EditCurrencyResponse> {
  return http
    .patch(`/currencies/${params.name}`, params)
    .then(response => response.data);
}

export function addCurrencyApi(
  params: EditCurrencyRequest,
): Promise<ErrorResponse | EditCurrencyResponse> {
  return http.post('/currencies', params).then(response => response.data);
}
