import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import {
  AddAddressRequest,
  AddAddressResponse,
  AddToBasketRequest,
  AddToBasketResponse,
  BrowseAddressRequest,
  BrowseAddressResponse,
  BrowseBasketRequest,
  BrowseBasketResponse,
  BrowseCategoriesRequest,
  BrowseCategoriesResponse,
  BrowseHomeListRequest,
  BrowseHomeListResponse,
  BrowseLikeListRequest,
  BrowseLikeListResponse,
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
  DeleteFromBasketItemRequest,
  DeleteFromBasketItemResponse,
  DeleteLikeItemRequest,
  DeleteLikeItemResponse,
  GetAboutusRequest,
  GetAboutusResponse,
  GetCodeRequest,
  GetCodeResponse,
  GetProductSliderRequest,
  GetProductSliderResponse,
  GetTokenRequest,
  GetTokenResponse,
  HisrtoryOfPurchaseRequest,
  HisrtoryOfPurchaseResponse,
  LikeProductRequest,
  LikeProductResponse,
  LoginRequest,
  LoginResponse,
  RegisterOrderRequest,
  RegisterOrderResponse,
  RegisterRequest,
  RegisterResponse,
  ResetPasswordCodeRequest,
  ResetPasswordCodeResponse,
  SearchProductRequest,
  SearchProductResponse,
  SendEmailNewsRequest,
  SendEmailNewsResponse,
  UserInfoRequest,
  UserInfoResponse,
  ValidateCodeRequest,
  ValidateCodeResponse,
  ValidationCodeRequest,
  ValidationCodeResponse,
  VerifyPaymentRequest,
  VerifyPaymentResponse,
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

export function deleteFromBasketItemApi(
  params: DeleteFromBasketItemRequest,
): Promise<ErrorResponse | DeleteFromBasketItemResponse> {
  return http
    .get('v1/delete-basket/', { params })
    .then(response => response.data);
}

export function sendEmailNewsApi(
  params: SendEmailNewsRequest,
): Promise<ErrorResponse | SendEmailNewsResponse> {
  return http
    .post('v1/register-email/', params)
    .then(response => response.data);
}

export function getProductSliderApi(
  params: GetProductSliderRequest,
): Promise<ErrorResponse | GetProductSliderResponse> {
  return http
    .get('v1/get-products-slider/', { params })
    .then(response => response.data);
}

export function hisrtoryOfPurchaseApi(
  params: HisrtoryOfPurchaseRequest,
): Promise<ErrorResponse | HisrtoryOfPurchaseResponse> {
  return http
    .get('v1/get-hisrtory-of-purchase/', { params })
    .then(response => response.data);
}

export function browseAddressApi(
  params: BrowseAddressRequest,
): Promise<ErrorResponse | BrowseAddressResponse> {
  return http.get('v1/address/', { params }).then(response => response.data);
}

export function addAddressApi(
  params: AddAddressRequest,
): Promise<ErrorResponse | AddAddressResponse> {
  return http.post('v1/address/', params).then(response => response.data);
}

export function browseLikeListApi(
  params: BrowseLikeListRequest,
): Promise<ErrorResponse | BrowseLikeListResponse> {
  return http
    .get('v1/get-favorities-purchase/', { params })
    .then(response => response.data);
}

export function deleteLikeItemApi(
  params: DeleteLikeItemRequest,
): Promise<ErrorResponse | DeleteLikeItemResponse> {
  return http
    .post('v1/get-favorities-purchase/', params)
    .then(response => response.data);
}

export function registerOrderApi(
  params: RegisterOrderRequest,
): Promise<RegisterOrderResponse> {
  return http
    .post('v1/register-order/', params)
    .then(response => response.data);
}

export function verifyPaymentApi(
  params: VerifyPaymentRequest,
): Promise<VerifyPaymentResponse> {
  return http
    .post('v1/verify-payment/', params)
    .then(response => response.data);
}

export function searchProductApi(
  params: SearchProductRequest,
): Promise<SearchProductResponse> {
  return http.post('v1/search/', params).then(response => response.data);
}

export function getAboutusApi(): Promise<GetAboutusResponse> {
  // params: GetAboutusRequest,
  return http.get('v1/about-us/').then(response => response.data);
}
