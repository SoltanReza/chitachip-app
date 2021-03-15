import { ErrorResponse, PaginationRequest, PaginationResponse } from 'types';
import { Message } from '../App/types';

/* --- STATE --- */
export interface AdminMessagePageState {
  browseMessage: {
    params?: BrowseMessageRequest;
    data?: BrowseMessageResponse;
    error?: ErrorResponse;
  };
  editMessage: {
    params?: EditMessageRequest;
    data?: EditMessageResponse;
    error?: ErrorResponse;
  };
  addMessage: {
    params?: AddMessageRequest;
    data?: AddMessageResponse;
    error?: ErrorResponse;
  };
  deleteMessage: {
    params?: DeleteMessageRequest;
    data?: DeleteMessageResponse;
    error?: ErrorResponse;
  };
}

export type ContainerState = AdminMessagePageState;

// #region BrowseMessage
export interface BrowseMessageRequest extends PaginationRequest {}
export interface BrowseMessageResponse extends PaginationResponse<Message> {}
// #endregion BrowseMessage

// #region EditMessage
export interface EditMessageRequest {
  id: number;
  title: string;
  body: string;
  user_id: number;
  read?: boolean;
}
export interface EditMessageResponse {}
// #endregion EditMessage

// #region AddMessage
export interface AddMessageRequest {
  title: string;
  body: string;
  user_id: number;
  read?: boolean;
}
export interface AddMessageResponse extends Message {}
// #endregion AddMessage

// #region DeleteMessage
export interface DeleteMessageRequest {
  id: number;
}
export interface DeleteMessageResponse {}
// #endregion DeleteMessage
