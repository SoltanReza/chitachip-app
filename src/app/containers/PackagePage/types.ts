import { ErrorResponse, PaginationRequest, PaginationResponse } from 'types';
import { Package } from '../App/types';

/* --- STATE --- */
export interface PackagePageState {
  browsePackage: {
    params?: BrowsePackageRequest;
    data?: BrowsePackageResponse;
    error?: ErrorResponse;
  };
  editPackage: {
    params?: EditPackageRequest;
    data?: EditPackageResponse;
    error?: ErrorResponse;
  };
  addPackage: {
    params?: AddPackageRequest;
    data?: AddPackageResponse;
    error?: ErrorResponse;
  };
}

export type ContainerState = PackagePageState;

// #region BrowsePackage
export interface BrowsePackageRequest extends PaginationRequest {}
export interface BrowsePackageResponse extends PaginationResponse<Package> {}
// #endregion BrowsePackage

// #region EditPackage
export interface EditPackageRequest {
  id: number;
  price: number;
  title: string;
  description: string;
  expire_at: string;
  type?: string;
}
export interface EditPackageResponse {}
// #endregion EditPackage

// #region addPackage
export interface AddPackageRequest {
  seller_id: number;
  currency: string;
  title: string;
  price: number;
  count: number;
  description: string;
  expire_at: string;
  type?: string;
}
export interface AddPackageResponse extends Package {}
// #endregion addPackage
