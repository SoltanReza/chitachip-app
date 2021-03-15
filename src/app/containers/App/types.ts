import {
  AuthData,
  ErrorResponse,
  Nullable,
  PaginationRequest,
  PaginationResponse,
  User,
  UserBalance,
} from 'types';
/* --- STATE --- */
export interface AppState {
  notifications: Notif[];

  login: {
    params?: LoginRequest;
    data?: LoginResponse;
    error?: ErrorResponse;
  };
  getMyProfile: {
    params?: GetMyProfileRequest;
    data?: GetMyProfileResponse;
    error?: ErrorResponse;
  };
  browseMessage: {
    params?: BrowseMessageRequest;
    data?: BrowseMessageResponse;
    error?: ErrorResponse;
  };
  browseUser: {
    params?: BrowseUserRequest;
    data?: BrowseUserResponse;
    error?: ErrorResponse;
  };
  browseCurrency: {
    params?: BrowseCurrencyRequest;
    data?: BrowseCurrencyResponse;
    error?: ErrorResponse;
  };

  browsePackageGlobalList: {
    params?: BrowsePackageGlobalListRequest;
    data?: BrowsePackageGlobalListResponse;
    error?: ErrorResponse;
  };
  browseAgentList: {
    params?: BrowseAgentListRequest;
    data?: BrowseAgentListResponse;
    error?: ErrorResponse;
  };
  addAgent: {
    params?: AddAgentRequest;
    data?: AddAgentResponse;
    error?: ErrorResponse;
  };

  // searchUser: {
  //   params?: SearchUserRequest;
  //   data?: SearchUserResponse;
  //   error?: ErrorResponse;
  // };

  auth?: AuthData;
}

export type ContainerState = AppState;

// #region GlobalInform
export interface GlobalInform {
  id: number;
  background: Nullable<string>;
  title: Nullable<string>;
  color: Nullable<string>;
  link: Nullable<{ title: string; url: string }>;
}
// #endregion GlobalInform

// #region Trade
export enum TradeType {
  ardbit = 'ardbit',
  others = 'others',
}

export enum StockType {
  GHATEI = 'GHATEI',
  MOVAGHAT = 'MOVAGHAT',
  PADASH = 'PADASH',
  HEBE = 'HEBE',
}

export enum TradeStatus {
  'DONE' = 'DONE',
  'PENDING' = 'PENDING',
  'EXPIRED' = 'EXPIRED',
  'FAILD' = 'FAILD',
  'REJECTED' = 'REJECTED',
  'CANCELED' = 'CANCELED',
}

export interface TradeItem {
  id: number;
  title: string;
  type: TradeType;
  count: number;
  price: number;
  totalPrice: number;
  description?: string;
}
export interface SellerOrBuyer {
  id: number;
  email: string;
}
export interface PackageItem {
  id: number;
  seller_id: number;
  buyer_id: number;
  currency_id: TradeType;
  title: string;
  count: number;
  price: number;
  totalPrice: number;
  description: string;
  reason: string;
  status: string;
  expire_at: string;
  seller: SellerOrBuyer;
  buyer: SellerOrBuyer;
  type: string;
}
export interface PackageGlobalItem {
  id: number;
  currency_id: TradeType;
  title: string;
  count: number;
  price: number;
  totalPrice: number;
  description: string;
}
export interface TopPackage extends TradeItem {}

export interface Package extends PackageItem {}
// #endregion Trade

// #region Currency
export interface Currency {
  name: string;
  rate_in_rial: number;
}
// #endregion Currency

// #region FinancialInfo
export interface FinancialInfo {
  id: number;
  user_id: number;
  date: string;
  documentId: string;
  description: string;
  debtor: string;
  creditor: string;
  balance: string;
  type: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
// #endregion FinancialInfo

// #region News
export enum NewsStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export interface News {
  slug: string;
  title: string;
  banner?: string;
  body: string;
  status: NewsStatus;
}
// #endregion News

// #region Message
export enum MessageStatus {
  UNREAD = 'UNREAD',
  UNREAD_REPLY = 'UNREAD_REPLY',
  READ = 'READ',
  CLOSED = 'CLOSED',
}
export interface UserMessageData {
  availableStock: number;
  blocked_stock: number;
  created_at: string;
  deleted_at: null;
  email: string;
  email_verified_at: string;
  id: number;
  role: string;
  stock: number;
  updated_at: string;
}
export interface Creator {
  availableStock: number;
  blocked_stock: number;
  created_at: string;
  deleted_at: string;
  email: string;
  email_verified_at: string;
  id: number;
  role: string;
  stock: number;
  updated_at: string;
}
export interface Message {
  id: number;
  title: string;
  body: string;
  user: UserMessageData;
  user_id: number;
  created_at: string;
  creator: Creator;
  creator_id: number;
  deleted_at: string;
  reply_id: number;
  status: MessageStatus;
  updated_at: string;
}

export enum TicketStatus {
  UNREAD = 'UNREAD',
  UNREAD_REPLY = 'UNREAD_REPLY',
  READ = 'READ',
  CLOSED = 'CLOSED',
}

export interface TicketChildren {
  body: string;
  created_at: string;
  creator_id: number;
  deleted_at: string;
  id: number;
  reply_id: number;
  status: string;
  title: string;
  updated_at: string;
  user_id: number;
}

export interface CreatorTicket {
  id: number;
  email: string;
  email_verified_at: string;
  created_at: string;
  deleted_at: string;
  updated_at: string;
  role: string;
  stock: number;
  blocked_stock: number;
  availableStock: number;
}

export interface Ticket {
  id: number;
  title: string;
  body: string;
  user_id: number;
  reply_id: Nullable<number>;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  creator_id: number;
  status: TicketStatus;
  user: CreatorTicket;
  creator: CreatorTicket;
  children: Array<TicketChildren>;
}
// #endregion Message

// #region Transaction

export enum TransactionType {
  'DEPOSIT' = 'DEPOSIT',
  'WITHDRAW' = 'WITHDRAW',
}

export enum TransactionStatus {
  'DONE' = 'DONE',
  'PENDING' = 'PENDING',
  'EXPIRED' = 'EXPIRED',
  'FAILD' = 'FAILD',
  'REJECTED' = 'REJECTED',
  'CANCELED' = 'CANCELED',
}
export interface Transaction {
  id: number;
  type: TransactionType;
  discount: number;
  vat: number;
  amount: number;
  status: TransactionStatus;
  description: string;
}
// #endregion Transaction

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

// #region UserMe
export interface GetMyProfileRequest {
  token: string;
}

export interface GetMyProfileResponse extends User {}
// #endregion UserMe

// #region BrowseMessage
export interface BrowseMessageRequest extends PaginationRequest {}
export interface BrowseMessageResponse extends PaginationResponse<Ticket> {}
// #endregion BrowseMessage

// #region BrowseUser
export interface BrowseUserRequest {}
export interface BrowseUserResponse extends PaginationResponse<User> {}
// #endregion BrowseUser

// #region BrowseCurrency
export interface BrowseCurrencyRequest extends PaginationRequest {}
export interface BrowseCurrencyResponse extends PaginationResponse<Currency> {}
// #endregion BrowseCurrency

// #region BrowsePackageGlobalList
export interface BrowsePackageGlobalListRequest extends PaginationRequest {}
export interface BrowsePackageGlobalListResponse
  extends PaginationResponse<PackageGlobalItem> {}
// #endregion BrowsePackageGlobalList

// #region BrowseAgentList
export interface BrowseAgentListRequest {}
export interface BrowseAgentListResponse {}
// #endregion BrowseAgentList

// #region AddAgent
export interface AddAgentRequest {
  user_id: number;
  currency_id: number;
  type: string;
  agent_id?: number;
}
export interface AddAgentResponse extends UserBalance {}

// #endregion AddAgent

// #region SearchUser
export interface SearchUserData {
  id: number;
  value: string;
}

export interface SearchUserRequest {
  search: string;
}
export interface SearchUserResponse extends Array<SearchUserData> {

}

// #endregion SearchUser
