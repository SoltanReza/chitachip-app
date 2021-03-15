import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import {
  AddPackageRequest,
  AddPackageResponse,
  BrowsePackageRequest,
  BrowsePackageResponse,
  EditPackageRequest,
  EditPackageResponse,
} from '../types';

export function browsePackageApi(
  params: BrowsePackageRequest,
): Promise<ErrorResponse | BrowsePackageResponse> {
  return http
    .get('/packages', {
      params: {
        with: 'seller,buyer',
      },
    })
    .then(response => response.data);
}

export function editPackageApi(
  params: EditPackageRequest,
): Promise<ErrorResponse | EditPackageResponse> {
  return http
    .patch(`/packages/${params.id}`, params)
    .then(response => response.data);
}

export function addPackageApi(
  params: AddPackageRequest,
): Promise<ErrorResponse | AddPackageResponse> {
  return http.post('/packages', params).then(response => response.data);
}
