import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import { EditProfileRequest, EditProfileResponse } from '../types';

export function editProfileApi(
  params: EditProfileRequest,
): Promise<ErrorResponse | EditProfileResponse> {
  const { id, ...data } = params;
  return http.patch(`/users/${id}`, data).then(response => response.data);
}
