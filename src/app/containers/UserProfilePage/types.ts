import { ErrorResponse } from 'types';

/* --- STATE --- */
export interface UserProfilePageState {
  editUser: {
    params?: EditUserRequest;
    data?: EditUserResponse;
    error?: ErrorResponse;
  };
}

export type ContainerState = UserProfilePageState;
// #region EditUser

export interface EditUserRequest {
  first_name: string;
  last_name: string;
  mobile: string;
  national_code: string;
}
export interface EditUserResponse {}
// #endregion EditUser
