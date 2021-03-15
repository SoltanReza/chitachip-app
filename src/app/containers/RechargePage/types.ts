import { ErrorResponse } from 'types';

/* --- STATE --- */
export interface RechargePageState {
  withdraw: {
    params?: WithdrawRequest;
    data?: WithdrawResponse;
    error?: ErrorResponse;
  };
}

export type ContainerState = RechargePageState;

//#region withdraw

export interface WithdrawRequest {
  amount: number;
}
export interface WithdrawResponse {}
// #endregion withdraw
