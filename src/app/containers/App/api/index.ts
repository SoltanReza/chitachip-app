import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import {
  BrowseCategoriesRequest,
  BrowseCategoriesResponse,
  BrowseHomeListRequest,
  BrowseHomeListResponse,
  BrowseListProductsRequest,
  BrowseListProductsResponse,
  BrowseProductRequest,
  BrowseProductResponse,
  GetCodeRequest,
  GetCodeResponse,
  GetTokenRequest,
  GetTokenResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ValidateCodeRequest,
  ValidateCodeResponse,
} from '../types';

export function getTokenApi(
  params: GetTokenRequest,
): Promise<GetTokenResponse> {
  return http.post('/token/', params).then(response => response.data);
}

export function loginApi(
  params: LoginRequest,
): Promise<ErrorResponse | LoginResponse> {
  return http.get('v1/login/', { params }).then(response => response.data);
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

export function browseListProductsApi(
  params: BrowseListProductsRequest,
): Promise<ErrorResponse | BrowseListProductsResponse> {
  return http.get('v1/products/', { params }).then(response => response.data);
}

export function registerApi(
  params: RegisterRequest,
): Promise<ErrorResponse | RegisterResponse> {
  return http.post('v1/register/', params).then(response => response.data);
}

export function getCodeApi(params: GetCodeRequest): Promise<GetCodeResponse> {
  return http.get('v1/get-code/', { params }).then(response => response.data);
}

export function validateCodeApi(
  params: ValidateCodeRequest,
): Promise<ValidateCodeResponse> {
  return http.post('v1/validate/', params).then(response => response.data);
}
