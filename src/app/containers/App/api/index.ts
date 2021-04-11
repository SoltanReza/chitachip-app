import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import {
  BrowseCategoriesRequest,
  BrowseCategoriesResponse,
  BrowseHomeListRequest,
  BrowseHomeListResponse,
  BrowseProductRequest,
  BrowseProductResponse,
  LoginRequest,
  LoginResponse,
} from '../types';

export function loginApi(
  params: LoginRequest,
): Promise<ErrorResponse | LoginResponse> {
  return http.post('/auth/token', params).then(response => response.data);
}

export function browseHomeListApi(
  params: BrowseHomeListRequest,
): Promise<ErrorResponse | BrowseHomeListResponse> {
  return http.get('v1/index/', { params }).then(response => response.data);
}

export function browseProductApi(
  params: BrowseProductRequest,
): Promise<ErrorResponse | BrowseProductResponse> {
  return http.get('v1/product/', { params }).then(response => response.data);
}

export function browseCategoriesApi(
  params: BrowseCategoriesRequest,
): Promise<ErrorResponse | BrowseCategoriesResponse> {
  return http.get('v1/categories/', { params }).then(response => response.data);
}
