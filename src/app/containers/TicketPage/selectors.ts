import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.ticketPage || initialState;

export const selectTicketPage = createSelector(
  [selectDomain],
  ticketPageState => ticketPageState,
);

export const selectBrowseTicket = createSelector(
  [selectDomain],
  state => state.browseTicket,
);

export const selectAddTicket = createSelector(
  [selectDomain],
  state => state.addTicket,
);
