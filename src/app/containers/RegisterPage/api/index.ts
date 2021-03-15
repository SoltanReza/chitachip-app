import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import { RegisterRequest, RegisterResponse } from '../types';

export function registerApi(
  params: RegisterRequest,
): Promise<ErrorResponse | RegisterResponse> {
  return http.post('/users', params).then(response => response.data);
}
