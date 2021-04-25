import { AuthData, ErrorResponse } from 'types';
/* --- STATE --- */
export interface AppState {
  notifications: Notif[];

  login: {
    params?: LoginRequest;
    data?: LoginResponse;
    error?: ErrorResponse;
  };
  browseHomeList: {
    params?: BrowseHomeListRequest;
    data?: BrowseHomeListResponse;
    error?: ErrorResponse;
  };
  browseProduct: {
    params?: BrowseProductRequest;
    data?: BrowseProductResponse;
    error?: ErrorResponse;
  };
  browseCategories: {
    params?: BrowseCategoriesRequest;
    data?: BrowseCategoriesResponse;
    error?: ErrorResponse;
  };
  browseListProducts: {
    params?: BrowseListProductsRequest;
    data?: BrowseListProductsResponse;
    error?: ErrorResponse;
  };
  register: {
    params?: RegisterRequest;
    data?: RegisterResponse;
    error?: ErrorResponse;
  };
  likeProduct: {
    params?: LikeProductRequest;
    data?: LikeProductResponse;
    error?: ErrorResponse;
  };

  auth?: AuthData;
}

export type ContainerState = AppState;

// #region NotificationMessage
export enum NotifType {
  DEFAULT = 'open',
  INFO = 'info',
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export interface Notif {
  message: string;
  type: NotifType;
}

// #endregion NotificationMessage

// #region Login
export interface LoginRequest {
  username: string;
  password: string;
}

// #region GetToken

export interface GetTokenRequest {
  username: string;
  password: string;
}
export interface GetTokenResponse extends AuthData {}
// #endregion GetToken

export interface LoginResponse {
  status: number;
}
// #endregion Login

// #region ProductData
export interface ProductData {
  id: string;
  category: [];
  title: string;
  description: string;
  price: number;
  image: string;
  is_offer: true;
  stock: 12;
  code: string;
  discount_end_time: string;
  properties: string;
  num_of_ratings: number;
  avg_rating: number;
  likes: number;
}

export interface SliderData {
  title: string;
  image: string;
  url: string;
}
export interface CategorySliderData {
  background: string;
  id: number;
  name: string;
}
export interface productBanner {
  product_banner: string;
}
export interface categoryBanner {
  category_banner: string;
}

// #endregion ProductData

// #region BrowseHomeList
export interface BrowseHomeListRequest {}

export interface BrowseHomeListResponse {
  slider: Array<SliderData>;
  category_slider: CategorySliderData;
  product_slider: ProductData;
  product_banner: productBanner;
  category_banner: categoryBanner;
  offers: Array<ProductData>;
}
// #endregion BrowseHomeList

// #region BrowseProduct
export interface BrowseProductRequest {
  product_id: String;
}

export interface BrowseProductResponse {
  product: ProductData;
}
// #endregion BrowseProduct

// #region BrowseCategories
export interface BrowseCategoriesRequest {}

export interface BrowseCategoriesResponse {
  categories: Array<{
    id: number;
    name: string;
    background: string;
    icon: string;
  }>;
}
// #endregion BrowseCategories

// #region BrowseListProducts
export interface BrowseListProductsRequest {
  cat_id: number;
}

export interface BrowseListProductsResponse {}
// #endregion BrowseListProducts

// #region Register
export interface RegisterRequest {
  first_name: string;
  last_name: string;
  mobile: string;
  password: string;
  national_code: string;
}

export interface RegisterResponse {
  response: string;
  status: number;
}
// #endregion Register

// #region GetCode
export interface GetCodeRequest {}

export interface GetCodeResponse {
  status: number;
}
// #endregion GetCode

// #region ValidateCode
export interface ValidateCodeRequest {
  code: string;
}

export interface ValidateCodeResponse {
  response: string;
  status: number;
}
// #endregion ValidateCode

// #region LikeProduct
export interface LikeProductRequest {
  product_id: number;
}

export interface LikeProductResponse {
  // id: string;
  response: string;
  status: number;
}
// #endregion LikeProduct

// #region CheckUser
export interface CheckUserRequest {
  username: string;
}
export interface CheckUserResponse {
  response: string;
  status: number;
}
// #endregion CheckPassword

// #region CheckPassword
export interface CheckPasswordRequest {
  username: string;
  password: string;
}
export interface CheckPasswordResponse {
  response: string;
  status: number;
}
// #endregion CheckPassword

// #region ResetPasswordCode
export interface ResetPasswordCodeRequest {
  mobile: string;
}
export interface ResetPasswordCodeResponse {
  response: string;
  status: number;
}
// #endregion ResetPasswordCode

// #region ValidationCode
export interface ValidationCodeRequest {
  code: string;
  mobile: string;
}
export interface ValidationCodeResponse {
  response: string;
  status: number;
}
// #endregion ValidationCode

// #region ChangePassword
export interface ChangePasswordRequest {
  username: string;
  password: string;
}
export interface ChangePasswordResponse {
  response: string;
  status: number;
}
// #endregion ChangePassword
