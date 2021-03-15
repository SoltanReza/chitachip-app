import { PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  AddTicketRequest,
  AddTicketResponse,
  BrowseTicketRequest,
  BrowseTicketResponse,
  ContainerState,
  ReplayTicketRequest,
  ReplayTicketResponse,
} from './types';

// The initial state of the TicketPage container
export const initialState: ContainerState = {
  browseTicket: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  addTicket: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  replayTicket: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
};

const ticketPageSlice = createSlice({
  name: 'ticketPage',
  initialState,
  reducers: {
    //#region browseTicket
    browseTicket(state, action: PayloadAction<BrowseTicketRequest>) {
      state.browseTicket.params = action.payload;
      state.browseTicket.data = initialState.browseTicket.data;
      state.browseTicket.error = initialState.browseTicket.error;
    },
    browseTicketSuccess(state, action: PayloadAction<BrowseTicketResponse>) {
      state.browseTicket.params = initialState.browseTicket.params;
      state.browseTicket.data = action.payload;
    },
    browseTicketError(state, action: PayloadAction<ErrorResponse>) {
      state.browseTicket.params = initialState.browseTicket.params;
      state.browseTicket.error = action.payload;
    },
    browseTicketClear(state) {
      state.browseTicket = initialState.browseTicket;
    },
    //#endregion browseTicket

    //#region addTicket
    addTicket(state, action: PayloadAction<AddTicketRequest>) {
      state.addTicket.params = action.payload;
      state.addTicket.data = initialState.addTicket.data;
      state.addTicket.error = initialState.addTicket.error;
    },
    addTicketSuccess(state, action: PayloadAction<AddTicketResponse>) {
      if (state.addTicket.params) {
        if (state.browseTicket.data) {
          state.browseTicket.data.data.push(action.payload);
        } else {
          state.browseTicket.data = {
            data: [action.payload],
            pagination: {
              total: 1,
              count: 1,
              per_page: 1,
              current_page: 1,
              total_pages: 1,
            },
          };
        }
      }

      state.addTicket.params = initialState.addTicket.params;
      state.addTicket.data = action.payload;
    },
    addTicketError(state, action: PayloadAction<ErrorResponse>) {
      state.addTicket.params = initialState.addTicket.params;
      state.addTicket.error = action.payload;
    },
    addTicketClear(state) {
      state.addTicket = initialState.addTicket;
    },
    //#endregion addTicket

    //#region ReplayTicket
    replayTicket(state, action: PayloadAction<ReplayTicketRequest>) {
      state.replayTicket.params = action.payload;
      state.replayTicket.data = initialState.replayTicket.data;
      state.replayTicket.error = initialState.replayTicket.error;
    },
    replayTicketSuccess(state, action: PayloadAction<ReplayTicketResponse>) {
      // if (state.browseTicket.data) {
      //   state.browseTicket.data.data = state.browseTicket.data.data.map(
      //     Ticket => {
      //       return Ticket.id === state.replayTicket.params?.id
      //         ? {
      //             ...Ticket,
      //             title: state.replayTicket.params?.title,
      //             description: state.replayTicket.params?.description,
      //             price: state.replayTicket.params?.price,
      //             expire_at: state.replayTicket.params?.expire_at,
      //           }
      //         : Ticket;
      //     },
      //   );
      // }
      state.replayTicket.params = initialState.replayTicket.params;
      state.replayTicket.data = action.payload;
    },
    replayTicketError(state, action: PayloadAction<ErrorResponse>) {
      state.replayTicket.params = initialState.replayTicket.params;
      state.replayTicket.error = action.payload;
    },
    replayTicketClear(state) {
      state.replayTicket = initialState.replayTicket;
    },
    //#endregion ReplayTicket
  },
});

export const { actions, reducer, name: sliceKey } = ticketPageSlice;
