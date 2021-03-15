import {
  ErrorResponse,
  PaginationRequest,
  PaginationResponse,
  User,
  UserBalance,
  UserProfile,
} from 'types';

/* --- STATE --- */
export interface UserManagementPageState {
  browseUsers: {
    params?: BrowseUsersRequest;
    data?: BrowseUsersResponse;
    error?: ErrorResponse;
  };
  editUsers: {
    params?: EditUsersRequest;
    data?: EditUsersResponse;
    error?: ErrorResponse;
  };
  AddUsers: {
    params?: AddUsersRequest;
    data?: AddUsersResponse;
    error?: ErrorResponse;
  };
  exportUsers: {
    params?: ExportUsersRequest;
    data?: ExportUsersResponse;
    error?: ErrorResponse;
  };
  importUsers: {
    params?: ImportUsersRequest;
    data?: ImportUsersResponse;
    error?: ErrorResponse;
  };
  importFinancial: {
    params?: ImportFinancialRequest;
    data?: ImportFinancialResponse;
    error?: ErrorResponse;
  };
  modifyCurrencyType: {
    params?: ModifyCurrencyTypeRequest;
    data?: ModifyCurrencyTypeResponse;
    error?: ErrorResponse;
  };
}

export type ContainerState = UserManagementPageState;

// #region BrowseUsers
export interface BrowseUsersRequest extends PaginationRequest {}
export interface BrowseUsersResponse extends PaginationResponse<User> {}
// #endregion BrowseUsers

// #region EditUsers
export interface EditUsersRequest {
  id: number;
  profile: UserProfile;
}
export interface EditUsersResponse {}
// #endregion EditUsers

// #region AddUsers
export interface AddUsersRequest {
  email: string;
  password: string;
}
export interface AddUsersResponse extends User {}
// #endregion AddUsers

// #region ExportUsers
export interface ExportUsersRequest {}
export interface ExportUsersResponse {
  url: string;
}
// #endregion ExportUsers

// #region ImportUsers
export interface ImportUsersRequest {
  data: FormData;
}
export interface ImportUsersResponse {}
// #endregion ImportUsers

// #region ImportFinancial
export interface ImportFinancialRequest {
  data: FormData;
}
export interface ImportFinancialResponse {}
// #endregion ImportFinancial

// #region ResetPassword
export interface ResetPasswordRequest {
  id: number;
  password: string;
}
export interface ResetPasswordResponse {}
// #endregion ResetPassword

// #region ModifyCurrencyType
export interface ModifyCurrencyTypeRequest {
  user_id: number;
  currency_id: number;
  type?: string;
}
export interface ModifyCurrencyTypeResponse extends UserBalance {}
// #endregion ModifyCurrencyType
