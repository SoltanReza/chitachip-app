import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import {
  AddUsersRequest,
  AddUsersResponse,
  BrowseUsersRequest,
  BrowseUsersResponse,
  EditUsersRequest,
  EditUsersResponse,
  ExportUsersRequest,
  ExportUsersResponse,
  ImportFinancialRequest,
  ImportFinancialResponse,
  ImportUsersRequest,
  ImportUsersResponse,
  ModifyCurrencyTypeRequest,
  ModifyCurrencyTypeResponse,
} from '../types';

export function browseUsersApi(
  params: BrowseUsersRequest,
): Promise<ErrorResponse | BrowseUsersResponse> {
  return http
    .get('/users', {
      params: {
        page: params.page,
        with: 'profile,balances',
      },
    })
    .then(response => response.data);
}

export function editUsersApi(
  params: EditUsersRequest,
): Promise<ErrorResponse | EditUsersResponse> {
  const { id, ...data } = params;
  return http.patch(`/users/${id}`, data).then(response => response.data);
}

export function addUsersApi(
  params: AddUsersRequest,
): Promise<ErrorResponse | AddUsersResponse> {
  return http.post('/users', params).then(response => response.data);
}

export function exportUsersApi(
  params: ExportUsersRequest,
): Promise<ErrorResponse | ExportUsersResponse> {
  return http
    .get('/users/export', {
      params: { ...params },
      responseType: 'arraybuffer',
    })
    .then((response: any) => {
      const blob = new Blob([response.data], {
        type: response.headers['content-type'],
      });
      const url = window.URL.createObjectURL(blob);
      return Promise.resolve(url);
    })
    .then(url => ({ url }));
}

export function importUsersApi(
  params: ImportUsersRequest,
): Promise<ErrorResponse | ImportUsersResponse> {
  return http.post('/users/import', params.data).then(response => ({}));
}

export function importFinancialApi(
  params: ImportFinancialRequest,
): Promise<ErrorResponse | ImportFinancialResponse> {
  return http.post('/finance/import', params.data).then(response => ({}));
}

export function resetPasswordApi(
  id: number,
  password: string,
): Promise<ErrorResponse | number> {
  return http.patch(`/users/${id}/reset-password`, { password });
}

export function modifyCurrencyTypeApi(
  params: ModifyCurrencyTypeRequest,
): Promise<ErrorResponse | ModifyCurrencyTypeResponse> {
  const { currency_id, user_id, ...data } = params;
  return http
    .put(`users/${user_id}/balances/${currency_id}`, data)
    .then(response => response.data);
}
