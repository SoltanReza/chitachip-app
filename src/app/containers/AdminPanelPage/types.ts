import { ErrorResponse, PaginationRequest, PaginationResponse } from 'types';
import { News } from '../App/types';

/* --- STATE --- */
export interface AdminPanelPageState {
  browseNews: {
    params?: BrowseNewsRequest;
    data?: BrowseNewsResponse;
    error?: ErrorResponse;
  };
}

export type ContainerState = AdminPanelPageState;

// #region BrowseNews
export interface BrowseNewsRequest extends PaginationRequest {}
export interface BrowseNewsResponse extends PaginationResponse<News> {}
// #endregion BrowseNews
