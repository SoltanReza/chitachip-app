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

export interface LoginResponse extends AuthData {}
// #endregion Login

// #region ProductData
export interface ProductData {
  id: number;
  category: 1;
  title: string;
  description: string;
  price: number;
  image: string;
  is_offer: boolean;
  stock: number;
  code: string;
  discount_end_time: string;
}

export interface SliderData {
  title: string;
  image: string;
  url: string;
}
// #endregion ProductData

// #region BrowseHomeList
export interface BrowseHomeListRequest {}

export interface BrowseHomeListResponse {
  slider: Array<SliderData>;
  offers: Array<ProductData>;
}
// #endregion BrowseHomeList

// #region BrowseProduct
export interface BrowseProductRequest {
  product_id: number;
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
  }>
 
}
// #endregion BrowseCategories
