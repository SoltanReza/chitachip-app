import { ErrorResponse, PaginationRequest, PaginationResponse } from 'types';
import { News, NewsStatus } from '../App/types';

/* --- STATE --- */
export interface NewsPageState {
  browseNews: {
    params?: BrowseNewsRequest;
    data?: BrowseNewsResponse;
    error?: ErrorResponse;
  };
  editNews: {
    params?: EditNewsRequest;
    data?: EditNewsResponse;
    error?: ErrorResponse;
  };
  addNews: {
    params?: AddNewsRequest;
    data?: AddNewsResponse;
    error?: ErrorResponse;
  };
  uploadImage: {
    params?: UploadImageRequest;
    data?: UploadImageResponse;
    error?: ErrorResponse;
  };
}

export type ContainerState = NewsPageState;

// #region BrowseNews
export interface BrowseNewsRequest extends PaginationRequest {}
export interface BrowseNewsResponse extends PaginationResponse<News> {}
// #endregion BrowseNews

// #region EditNews
export interface EditNewsRequest {
  slug: string;
  title: string;
  body: string;
  status: NewsStatus;
}
export interface EditNewsResponse {}
// #endregion EditNews

// #region AddNews
export interface AddNewsRequest extends News {}
export interface AddNewsResponse extends News {}
// #endregion AddNews

// #region UploadImage
export interface UploadImageRequest {
  slug: string;
  data: FormData;
}
export interface UploadImageResponse {}
// #endregion UploadImage
