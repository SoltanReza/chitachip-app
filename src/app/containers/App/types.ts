import { AuthData, BasketData, ErrorResponse } from 'types';
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

  userInfo: {
    params?: UserInfoRequest;
    data?: UserInfoResponse;
    error?: ErrorResponse;
  };
  browseBasket: {
    params?: BrowseBasketRequest;
    data?: BrowseBasketResponse;
    error?: ErrorResponse;
  };
  addToBasket: {
    params?: AddToBasketRequest;
    data?: AddToBasketResponse;
    error?: ErrorResponse;
  };
  deleteFromBasketItem: {
    params?: DeleteFromBasketItemRequest;
    data?: DeleteFromBasketItemResponse;
    error?: ErrorResponse;
  };
  sendEmailNews: {
    params?: SendEmailNewsRequest;
    data?: SendEmailNewsResponse;
    error?: ErrorResponse;
  };
  getProductSlider: {
    params?: GetProductSliderRequest;
    data?: GetProductSliderResponse;
    error?: ErrorResponse;
  };
  hisrtoryOfPurchase: {
    params?: HisrtoryOfPurchaseRequest;
    data?: HisrtoryOfPurchaseResponse;
    error?: ErrorResponse;
  };
  addAddress: {
    params?: AddAddressRequest;
    data?: AddAddressResponse;
    error?: ErrorResponse;
  };
  browseAddress: {
    params?: BrowseAddressRequest;
    data?: BrowseAddressResponse;
    error?: ErrorResponse;
  };
  browseLikeList: {
    params?: BrowseLikeListRequest;
    data?: BrowseLikeListResponse;
    error?: ErrorResponse;
  };
  deleteLikeItem: {
    params?: DeleteLikeItemRequest;
    data?: DeleteLikeItemResponse;
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

export interface LoginResponse {
  status: number;
}
// #endregion Login

// #region GetToken

export interface GetTokenRequest {
  username: string;
  password: string;
}
export interface GetTokenResponse extends AuthData {}
// #endregion GetToken

// #region ProductData
export interface ProductData {
  id: string;
  avg_stars: number;
  code: string;
  description: string;
  discount_end_time: string;
  image: string;
  image_thumbnail: string;
  is_offer: boolean;
  num_of_ratings: number;
  discount: number;
  price: number;
  properties: string;
  stock: number;
  sub_category: Array<string>;
  title: string;
  like_number: number;
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

export interface Banners {
  first_banner: string;
  second_banner: string;
  third_banner: string;
  url_first: string;
  url_second: string;
  url_third: string;
}
export interface ProductsDataWithText {
  text: string;
  prs: Array<ProductData>;
}
export interface Stories {
  image: string;
  name: string;
}
export interface Categories {
  category: {
    icon: string;
    id: string;
    name: string;
  };
  sub: Array<{
    icon: string;
    id: string;
    name: string;
  }>;
}

export interface BrowseHomeListResponse {
  banners: Banners;
  first_list: ProductsDataWithText;
  second_list: ProductsDataWithText;
  slider_products: ProductsDataWithText;
  most_sold: Array<ProductData>;
  new_products: Array<ProductData>;
  offers: Array<ProductData>;
  stories: Array<Stories>;
  categories: Array<Categories>;
  offers_time: number;
}
// #endregion BrowseHomeList

// #region BrowseProduct
export interface BrowseProductRequest {
  product_id: string;
}

export interface BrowseProductResponse {
  product: ProductData;
  similar: Array<ProductData>;
  status: number;
}
// #endregion BrowseProduct

// #region BrowseCategories
export interface BrowseCategoriesRequest {
  cat_id?: string;
  sub_id?: string;
}

export interface Cats {
  active: boolean;
  icon: string;
  id: string;
  name: string;
}
export interface Sub {
  icon: string;
  id: string;
  name: string;
}

export interface BrowseCategoriesResponse {
  cats: Array<Cats>;
  sub: Array<Sub>;
  data: Array<ProductData>;
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
  mobile: string;
  password: string;
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
  product_id: string;
}

export interface LikeProductResponse {
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
  first_name: string;
  last_name: string;
  national_code: string;
  mobile: string;
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

// #region UserInfo
export interface UserData {
  first_name: string;
  last_name: string;
  mobile: string;
  national_code: string;
}
export interface UserInfoRequest {}
export interface UserInfoResponse {
  user: UserData;
  mobile: string;
  status: number;
}
// #endregion UserInfo

// #region BrowseBasket

export interface BrowseBasketRequest {}
export interface BrowseBasketResponse {
  value: BasketData;
  amount: number;
}
// #endregion BrowseBasket

// #region AddToBasket

export interface AddToBasketRequest {
  product_id: string;
  quantity: number;
}
export interface AddToBasketResponse {
  data: BasketData;
  response: string;
}
// #endregion AddToBasket

// #region DeleteFromBasketItem

export interface DeleteFromBasketItemRequest {
  product_id: string;
}
export interface DeleteFromBasketItemResponse {
  data: BasketData;
  response: string;
}
// #endregion DeleteFromBasketItem

// #region SendEmailNews

export interface SendEmailNewsRequest {
  email: string;
}
export interface SendEmailNewsResponse {}
// #endregion SendEmailNews

// #region GetProductSlider

export interface GetProductSliderRequest {
  item: number;
}
export interface GetProductSliderResponse {}
// #endregion GetProductSlider

// #region HisrtoryOfPurchase
export interface Bill {
  user: string;
  date: string;
  weight: string;
  shipment: string;
  invoiceNumber: string;
  address: string;
  address_name: string;
  phone: string;
  prs: [
    {
      name: string;
      qty: string;
      single_price: string;
      total_price: string;
      image: string;
    },
  ];
}
export interface HisrtoryOfPurchaseRequest {}
export interface HisrtoryOfPurchaseResponse {
  data: Array<{
    bill: Bill;
    refID: number;
    state: string;
    invoiceNumber: number;
    date: string;
    type: string;
    price: string;
  }>;
}

// #endregion HisrtoryOfPurchase

// #region AddAddress
export interface AddAddressRequest {
  receiver_name: string;
  receiver_mobile: string;
  code_posti: string;
  name: string;
  address: string;
}
export interface AddAddressResponse {
  id: string;
  staus: string;
}
// #endregion AddAddress

// #region BrowseAddress
export interface BrowseAddressRequest {}
export interface BrowseAddressResponse {
  data: Array<{
    id: string;
    address: string;
    code_posti: string;
    name: string;
    receiver_mobile: string;
    receiver_name: string;
    user: string;
  }>;
  staus: number;
}
// #endregion BrowseAddress

// #region BrowseLikeList
export interface BrowseLikeListRequest {}
export interface BrowseLikeListResponse {
  data: Array<{
    image_thumbnail: string;
    title: string;
    price: string;
    id: string;
  }>;
}
// #endregion BrowseLikeList

// #region DeleteLikeItem
export interface DeleteLikeItemRequest {
  id: string;
}
export interface DeleteLikeItemResponse {
  status: number;
}
// #endregion DeleteLikeItem
