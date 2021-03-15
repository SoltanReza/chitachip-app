import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import { BrowseNewsRequest, BrowseNewsResponse } from '../types';

export function browseNewsApi(
  params: BrowseNewsRequest,
): Promise<ErrorResponse | BrowseNewsResponse> {
  return http.get('/news').then(response => response.data);
}
