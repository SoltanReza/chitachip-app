import { PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { BrowseNewsRequest, BrowseNewsResponse, ContainerState } from './types';

// The initial state of the AdminPanelPage container
export const initialState: ContainerState = {
  browseNews: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
};

const adminPanelPageSlice = createSlice({
  name: 'adminPanelPage',
  initialState,
  reducers: {
    //#region BrowseNews
    browseNews(state, action: PayloadAction<BrowseNewsRequest>) {
      state.browseNews.params = action.payload;
      state.browseNews.data = initialState.browseNews.data;
      state.browseNews.error = initialState.browseNews.error;
    },
    browseNewsSuccess(state, action: PayloadAction<BrowseNewsResponse>) {
      state.browseNews.params = initialState.browseNews.params;
      state.browseNews.data = action.payload;
    },
    browseNewsError(state, action: PayloadAction<ErrorResponse>) {
      state.browseNews.params = initialState.browseNews.params;
      state.browseNews.error = action.payload;
    },
    browseNewsClear(state) {
      state.browseNews = initialState.browseNews;
    },
    //#endregion BrowseNews
  },
});

export const { actions, reducer, name: sliceKey } = adminPanelPageSlice;
