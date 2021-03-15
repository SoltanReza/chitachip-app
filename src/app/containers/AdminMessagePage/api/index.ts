import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import {
  AddMessageRequest,
  AddMessageResponse,
  BrowseMessageRequest,
  BrowseMessageResponse,
  DeleteMessageRequest,
  DeleteMessageResponse,
  EditMessageRequest,
  EditMessageResponse,
} from '../types';

export function browseMessageApi(
  params: BrowseMessageRequest,
): Promise<ErrorResponse | BrowseMessageResponse> {
  return http
    .get('/messages', {
      params: {
        with: 'user,creator',
        sort: 'created_at',
        sortOrder: 'desc',
      },
    })
    .then(response => response.data);
}

export function editMessageApi(
  params: EditMessageRequest,
): Promise<ErrorResponse | EditMessageResponse> {
  const { id, ...data } = params;
  return http.patch(`/messages/${id}`, data).then(response => response.data);
}

export function deleteMessageApi(
  params: DeleteMessageRequest,
): Promise<ErrorResponse | DeleteMessageResponse> {
  return http.delete(`/messages/${params.id}`).then(response => response.data);
}

export function addMessageApi(
  params: AddMessageRequest,
): Promise<ErrorResponse | AddMessageResponse> {
  return http.post('/messages', params).then(response => response.data);
}
