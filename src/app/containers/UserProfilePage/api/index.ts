import { http } from 'utils/request';
import { EditUserRequest, EditUserResponse } from '../types';

export function editUserApi(
  params: EditUserRequest,
): Promise<EditUserResponse> {
  return http.put('v1/user/', params).then(response => response.data);
}
