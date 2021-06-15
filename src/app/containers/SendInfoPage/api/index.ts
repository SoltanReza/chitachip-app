import { http } from 'utils/request';
import { SendDateRequest, SendDateResponse } from '../types';

export function sendDateApi(
  params: SendDateRequest,
): Promise<SendDateResponse> {
  return http.get('v1/dates/', { params }).then(response => response.data);
}
