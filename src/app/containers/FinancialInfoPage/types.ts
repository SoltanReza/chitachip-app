import { ErrorResponse, PaginationRequest } from 'types';
import { FinancialInfo } from '../App/types';

/* --- STATE --- */
export interface FinancialInfoPageState {
  browseFinancialInfo: {
    params?: BrowseFinancialInfoRequest;
    data?: BrowseFinancialInfoResponse;
    error?: ErrorResponse;
  };
}

export type ContainerState = FinancialInfoPageState;

// #region BrowseFinancialInfo
export interface BrowseFinancialInfoRequest extends PaginationRequest {}
export interface BrowseFinancialInfoResponse extends Array<FinancialInfo> {}
// #endregion BrowseFinancialInfo
