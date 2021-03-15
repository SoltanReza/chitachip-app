import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import { WithdrawRequest, WithdrawResponse } from '../types';

export function withdrawApi(
  params: WithdrawRequest,
): Promise<ErrorResponse | WithdrawResponse> {
  return http
    .post('/transactions/withdraw', params)
    .then(response => response.data);
}
