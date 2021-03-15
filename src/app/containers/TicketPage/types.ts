import {
  ErrorResponse,
  Nullable,
  PaginationRequest,
  PaginationResponse,
  User,
} from 'types';
import { Ticket } from '../App/types';

/* --- STATE --- */
export interface TicketPageState {
  browseTicket: {
    params?: BrowseTicketRequest;
    data?: BrowseTicketResponse;
    error?: ErrorResponse;
  };

  addTicket: {
    params?: AddTicketRequest;
    data?: AddTicketResponse;
    error?: ErrorResponse;
  };
  replayTicket: {
    params?: ReplayTicketRequest;
    data?: ReplayTicketResponse;
    error?: ErrorResponse;
  };
}

export type ContainerState = TicketPageState;

// #region BrowseTicket
export interface BrowseTicketRequest extends PaginationRequest {}
export interface BrowseTicketResponse extends PaginationResponse<Ticket> {}
// #endregion BrowseTicket

// #region ReplayTicket
export interface ReplayTicketRequest {}
export interface ReplayTicketResponse {}
// #endregion ReplayTicket

// #region addTicket
export interface AddTicketRequest {
  title: string;
  body: Nullable<string>;
  user_id: Nullable<number>;
  reply_id: Nullable<number>;
}
export interface AddTicketResponse extends Ticket {}
// #endregion addTicket
