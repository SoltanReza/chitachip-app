import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import { LoginRequest, LoginResponse } from '../types';

export function loginApi(
  params: LoginRequest,
): Promise<ErrorResponse | LoginResponse> {
  return http.post('/auth/token', params).then(response => response.data);
}
