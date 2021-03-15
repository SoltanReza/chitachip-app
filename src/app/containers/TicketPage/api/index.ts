import { ErrorResponse } from 'types';
import { http } from 'utils/request';
import {
  AddTicketRequest,
  AddTicketResponse,
  BrowseTicketRequest,
  BrowseTicketResponse,
} from '../types';

export function browseTicketApi(
  params: BrowseTicketRequest,
): Promise<ErrorResponse | BrowseTicketResponse> {
  return http
    .get('/messages', {
      params: {
        with: 'children,user,creator',
        sort: 'created_at',
        sortOrder: 'desc',
      },
    })
    .then(response => response.data);
}

export function addTicketApi(
  params: AddTicketRequest,
): Promise<ErrorResponse | AddTicketResponse> {
  return http.post('/messages', params).then(response => response.data);
}
