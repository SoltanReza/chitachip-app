import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import {
  AddToBasketRequest,
  AddToBasketResponse,
  BrowseBasketRequest,
  BrowseBasketResponse,
  BrowseCategoriesRequest,
  BrowseCategoriesResponse,
  BrowseHomeListRequest,
  BrowseHomeListResponse,
  BrowseListProductsRequest,
  BrowseListProductsResponse,
  BrowseProductRequest,
  BrowseProductResponse,
  ChangePasswordRequest,
  ChangePasswordResponse,
  CheckPasswordRequest,
  CheckPasswordResponse,
  CheckUserRequest,
  CheckUserResponse,
  GetCodeRequest,
  GetCodeResponse,
  GetTokenRequest,
  GetTokenResponse,
  LikeProductRequest,
  LikeProductResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ResetPasswordCodeRequest,
  ResetPasswordCodeResponse,
  UserInfoRequest,
  UserInfoResponse,
  ValidateCodeRequest,
  ValidateCodeResponse,
  ValidationCodeRequest,
  ValidationCodeResponse,
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

export function checkUserApi(
  params: CheckUserRequest,
): Promise<CheckUserResponse> {
  return http.get('v1/check-user/', { params }).then(response => response.data);
}

export function checkPasswordApi(
  params: CheckPasswordRequest,
): Promise<CheckPasswordResponse> {
  return http
    .get('v1/check-password/', { params })
    .then(response => response.data);
}

export function resetPasswordCodeApi(
  params: ResetPasswordCodeRequest,
): Promise<ResetPasswordCodeResponse> {
  return http
    .get('v1/get-password-code/', { params })
    .then(response => response.data);
}

export function validationCodeApi(
  params: ValidationCodeRequest,
): Promise<ValidationCodeResponse> {
  return http.post('v1/validation/', params).then(response => response.data);
}

export function changePasswordApi(
  params: ChangePasswordRequest,
): Promise<ChangePasswordResponse> {
  return http
    .put('v1/change-password/', params)
    .then(response => response.data);
}

export function likeProductApi(
  params: LikeProductRequest,
): Promise<LikeProductResponse> {
  return http.get('v1/like/', { params }).then(response => response.data);
}

export function userInfoApi(
  params: UserInfoRequest,
): Promise<ErrorResponse | UserInfoResponse> {
  return http.get('v1/user/', { params }).then(response => response.data);
}

export function browseBasketApi(
  params: BrowseBasketRequest,
): Promise<ErrorResponse | BrowseBasketResponse> {
  return http.get('v1/basket/', { params }).then(response => response.data);
}

export function addToBasketApi(
  params: AddToBasketRequest,
): Promise<ErrorResponse | AddToBasketResponse> {
  return http.get('v1/basket/', { params }).then(response => response.data);
}
