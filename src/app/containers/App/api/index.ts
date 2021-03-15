import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import {
  LoginRequest,
  LoginResponse,
  GetMyProfileRequest,
  GetMyProfileResponse,
  BrowseMessageRequest,
  BrowseMessageResponse,
  BrowseUserRequest,
  BrowseUserResponse,
  BrowseCurrencyRequest,
  BrowseCurrencyResponse,
  BrowsePackageGlobalListRequest,
  BrowsePackageGlobalListResponse,
  AddAgentRequest,
  AddAgentResponse,
  BrowseAgentListRequest,
  BrowseAgentListResponse,
  SearchUserRequest,
  SearchUserResponse,
} from '../types';

export function loginApi(
  params: LoginRequest,
): Promise<ErrorResponse | LoginResponse> {
  return http.post('/auth/token', params).then(response => response.data);
}

export function getMyProfileApi(
  params: GetMyProfileRequest,
): Promise<ErrorResponse | GetMyProfileResponse> {
  return http
    .get('/users/me', {
      params: {
        with: 'profile,balances',
      },
      headers: {
        Authorization: `Bearer ${params.token}`,
      },
    })
    .then(response => response.data);
}

export function browseMessageApi(
  params: BrowseMessageRequest,
): Promise<ErrorResponse | BrowseMessageResponse> {
  return http
    .get('/messages', {
      params: {
        with: 'children,user,creator',
        sort: 'created_at',
        sortOrder: 'desc',
        page: params.page,
        perPage: params.perPage,
      },
    })
    .then(response => response.data);
}

export function markAsReadMessageApi(
  id: number,
): Promise<ErrorResponse | number> {
  return http.put(`/messages/${id}/mark-as-read`).then(() => id);
}

export function browseUserApi(
  params: BrowseUserRequest,
): Promise<ErrorResponse | BrowseUserResponse> {
  return http
    .get('/users', {
      params: {
        with: 'profile,balances',
      },
    })
    .then(response => response.data);
}

export function browseCurrencyApi(
  params: BrowseCurrencyRequest,
): Promise<ErrorResponse | BrowseCurrencyResponse> {
  return http.get('/currencies').then(response => response.data);
}

export function browsePackageGlobalListApi(
  params: BrowsePackageGlobalListRequest,
): Promise<ErrorResponse | BrowsePackageGlobalListResponse> {
  return http
    .get('/packages/available', {
      params: {
        sort: 'created_at',
        sortOrder: 'desc',
      },
    })
    .then(response => response.data);
}

export function orderPackageApi(id: number): Promise<ErrorResponse | number> {
  return http.post(`/packages/${id}/order`).then(() => id);
}

export function browseAgentListApi(
  params: BrowseAgentListRequest,
): Promise<ErrorResponse | BrowseAgentListResponse> {
  return http.get('/stock-agents/list', params).then(response => response.data);
}

export function addAgentApi(
  params: AddAgentRequest,
): Promise<ErrorResponse | AddAgentResponse> {
  const { currency_id, user_id, ...data } = params;
  return http
    .put(`users/${user_id}/balances/${currency_id}`, data)
    .then(response => response.data);
}

export function searchUserApi(
  params: SearchUserRequest,
): Promise<SearchUserResponse> {
  return http.get('users/search', { params }).then(response => response.data);
}
