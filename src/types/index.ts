import { RootState } from './RootState';

export type { RootState };

export type Nullable<T> = null | T;

export interface ErrorResponse {
  code: number;
  message: string;
}

// #region User
export interface UserProfile {
  id: number;
  first_name: string;
  last_name: string;
  father_name: string;
  sh_sh: string;
  national_code: string;
  address: string;
  post_code: string;
  tel: string;
}

export interface UserBalance {
  agent_id: number;
  agent_name: string;
  balance: number;
  currency_id: number;
  currency_name: string;
  type: string;
  rate_in_rial: number;
  total_rate_in_rial: number;
}

export interface User {
  id: number;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  role: string;
  stock: number;
  blocked_stock: number;
  profile: Nullable<UserProfile>;
  balances: Nullable<Array<UserBalance>>;
}
// #endregion User

// #region Auth
export enum AuthRoles {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  REGULAR = 'REGULAR',
}

export enum AuthLevel {
  ALL,
  UNAUTHENTICATED,
  AUTHENTICATED,
}

export interface AuthData {
  token: string;
  role: AuthRoles;
  user: User;
  access: string;
  refresh: string;
}

export interface Auth {
  data?: AuthData;
  isAuthenticated: () => boolean;
  hasRole: (roles?: AuthRoles[]) => boolean;
  profileIsCompleted: () => boolean;
}
// #endregion Auth

// #region pagination
export interface PaginationRequest {
  page?: number;
  perPage?: number;
}

export interface PaginationResponse<T> {
  data: Array<T>;
  pagination: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
  };
  payload?: null | any;
}
// #endregion pagination
