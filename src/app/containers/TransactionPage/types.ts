import { ErrorResponse, PaginationRequest, PaginationResponse } from 'types';
import { Transaction } from 'app/containers/App/types';
/* --- STATE --- */
export interface TransactionPageState {
  browseTransaction: {
    params?: BrowseTransactionRequest;
    data?: BrowseTransactionResponse;
    error?: ErrorResponse;
  };
}

export type ContainerState = TransactionPageState;

// #region BrowseTransaction
export interface BrowseTransactionRequest extends PaginationRequest {}
export interface BrowseTransactionResponse
  extends PaginationResponse<Transaction> {}
// #endregion BrowseTransaction
