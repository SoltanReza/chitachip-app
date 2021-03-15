import { AuthRoles, ErrorResponse } from 'types';

/* --- STATE --- */
export interface RegisterPageState {
  register: {
    params?: RegisterRequest;
    data?: RegisterResponse;
    error?: ErrorResponse;
  };
}

export type ContainerState = RegisterPageState;

// #region Register
export interface RegisterRequest {
  email: string;
  password: string;
}

export interface RegisterResponse {
  token: string;
  scope: AuthRoles;
}
// #endregion Register
