import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import {
  BrowseFinancialInfoRequest,
  BrowseFinancialInfoResponse,
} from '../types';

export function browseFinancialInfoApi(
  params: BrowseFinancialInfoRequest,
): Promise<ErrorResponse | BrowseFinancialInfoResponse> {
  return http.get('/finance').then(response => response.data);
}
