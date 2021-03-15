import { PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  AddMessageRequest,
  AddMessageResponse,
  BrowseMessageRequest,
  BrowseMessageResponse,
  ContainerState,
  DeleteMessageRequest,
  DeleteMessageResponse,
  EditMessageRequest,
  EditMessageResponse,
} from './types';

// The initial state of the AdminMessagePage container
export const initialState: ContainerState = {
  browseMessage: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  addMessage: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  editMessage: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  deleteMessage: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
};

const adminMessagePageSlice = createSlice({
  name: 'adminMessagePage',
  initialState,
  reducers: {
    //#region BrowseMessage
    browseMessage(state, action: PayloadAction<BrowseMessageRequest>) {
      state.browseMessage.params = action.payload;
      state.browseMessage.data = initialState.browseMessage.data;
      state.browseMessage.error = initialState.browseMessage.error;
    },
    browseMessageSuccess(state, action: PayloadAction<BrowseMessageResponse>) {
      state.browseMessage.params = initialState.browseMessage.params;
      state.browseMessage.data = action.payload;
    },
    browseMessageError(state, action: PayloadAction<ErrorResponse>) {
      state.browseMessage.params = initialState.browseMessage.params;
      state.browseMessage.error = action.payload;
    },
    browseMessageClear(state) {
      state.browseMessage = initialState.browseMessage;
    },
    //#endregion BrowseMessage

    //#region AddMessage
    addMessage(state, action: PayloadAction<AddMessageRequest>) {
      state.addMessage.params = action.payload;
      state.addMessage.data = initialState.addMessage.data;
      state.addMessage.error = initialState.addMessage.error;
    },
    addMessageSuccess(state, action: PayloadAction<AddMessageResponse>) {
      if (state.addMessage.params) {
        if (state.browseMessage.data) {
          state.browseMessage.data.data.push(action.payload);
        } else {
          state.browseMessage.data = {
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

      state.addMessage.params = initialState.addMessage.params;
      state.addMessage.data = action.payload;
    },
    addMessageError(state, action: PayloadAction<ErrorResponse>) {
      state.addMessage.params = initialState.addMessage.params;
      state.addMessage.error = action.payload;
    },
    addMessageClear(state) {
      state.addMessage = initialState.addMessage;
    },
    //#endregion AddMessage

    //#region EditMessage

    editMessage(state, action: PayloadAction<EditMessageRequest>) {
      state.editMessage.params = action.payload;
      state.editMessage.data = initialState.editMessage.data;
      state.editMessage.error = initialState.editMessage.error;
    },
    editMessageSuccess(state, action: PayloadAction<EditMessageResponse>) {
      if (state.browseMessage.data) {
        state.browseMessage.data.data = state.browseMessage.data?.data.map(
          message => {
            return message.title === state.editMessage.params?.title
              ? {
                  ...message,

                  title: state.editMessage.params?.title,
                  body: state.editMessage.params?.body,
                }
              : message;
          },
        );
      }
      state.editMessage.params = initialState.editMessage.params;
      state.editMessage.data = action.payload;
    },
    editMessageError(state, action: PayloadAction<ErrorResponse>) {
      state.editMessage.params = initialState.editMessage.params;
      state.editMessage.error = action.payload;
    },
    editMessageClear(state) {
      state.editMessage = initialState.editMessage;
    },
    //#endregion DeleteMessage

    deleteMessage(state, action: PayloadAction<DeleteMessageRequest>) {
      state.deleteMessage.params = action.payload;
      state.deleteMessage.data = initialState.deleteMessage.data;
      state.deleteMessage.error = initialState.deleteMessage.error;
    },
    deleteMessageSuccess(state, action: PayloadAction<DeleteMessageResponse>) {
      if (state.browseMessage.data) {
        state.browseMessage.data.data = state.browseMessage.data.data.filter(
          message => message.id !== state.deleteMessage.params?.id,
        );
      }
      state.deleteMessage.params = initialState.deleteMessage.params;
      state.deleteMessage.data = action.payload;
    },
    deleteMessageError(state, action: PayloadAction<ErrorResponse>) {
      state.deleteMessage.params = initialState.deleteMessage.params;
      state.deleteMessage.error = action.payload;
    },
    deleteMessageClear(state) {
      state.deleteMessage = initialState.deleteMessage;
    },
    //#endregion DeleteMessage
  },
});

export const { actions, reducer, name: sliceKey } = adminMessagePageSlice;
