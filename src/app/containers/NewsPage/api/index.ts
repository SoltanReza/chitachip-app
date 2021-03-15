import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import {
  AddNewsRequest,
  AddNewsResponse,
  BrowseNewsRequest,
  BrowseNewsResponse,
  EditNewsRequest,
  EditNewsResponse,
  UploadImageRequest,
  UploadImageResponse,
} from '../types';

export function browseNewsApi(
  params: BrowseNewsRequest,
): Promise<ErrorResponse | BrowseNewsResponse> {
  return http.get('/news').then(response => response.data);
}

export function editNewsApi(
  params: EditNewsRequest,
): Promise<ErrorResponse | EditNewsResponse> {
  const { slug, ...data } = params;
  return http.patch(`/news/${slug}`, data).then(response => response.data);
}

export function addNewsApi(
  params: AddNewsRequest,
): Promise<ErrorResponse | AddNewsResponse> {
  return http.post('/news', params).then(response => response.data);
}

export function uploadImageApi(
  params: UploadImageRequest,
): Promise<ErrorResponse | UploadImageResponse> {
  return http
    .post(`/news/${params.slug}/banner`, params.data)
    .then(response => ({}));
}
