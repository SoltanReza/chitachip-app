import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import { BrowseTransactionRequest, BrowseTransactionResponse } from '../types';

export function browseTransactionApi(
  params: BrowseTransactionRequest,
): Promise<ErrorResponse | BrowseTransactionResponse> {
  return http.get('/transactions').then(response => response.data);
}
