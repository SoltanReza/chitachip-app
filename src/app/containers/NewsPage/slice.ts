import { PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  AddNewsRequest,
  AddNewsResponse,
  BrowseNewsRequest,
  BrowseNewsResponse,
  ContainerState,
  EditNewsRequest,
  EditNewsResponse,
  UploadImageRequest,
  UploadImageResponse,
} from './types';

// The initial state of the NewsPage container
export const initialState: ContainerState = {
  browseNews: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  addNews: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  editNews: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  uploadImage: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
};

const newsPageSlice = createSlice({
  name: 'newsPage',
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

    //#region AddNews
    addNews(state, action: PayloadAction<AddNewsRequest>) {
      state.addNews.params = action.payload;
      state.addNews.data = initialState.addNews.data;
      state.addNews.error = initialState.addNews.error;
    },
    addNewsSuccess(state, action: PayloadAction<AddNewsResponse>) {
      if (state.addNews.params) {
        if (state.browseNews.data) {
          state.browseNews.data.data.push(action.payload);
        } else {
          state.browseNews.data = {
            data: [state.addNews.params],
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

      state.addNews.params = initialState.addNews.params;
      state.addNews.data = action.payload;
    },
    addNewsError(state, action: PayloadAction<ErrorResponse>) {
      state.addNews.params = initialState.addNews.params;
      state.addNews.error = action.payload;
    },
    addNewsClear(state) {
      state.addNews = initialState.addNews;
    },
    //#endregion AddNews

    //#region EditNews
    editNews(state, action: PayloadAction<EditNewsRequest>) {
      state.editNews.params = action.payload;
      state.editNews.data = initialState.editNews.data;
      state.editNews.error = initialState.editNews.error;
    },
    editNewsSuccess(state, action: PayloadAction<EditNewsResponse>) {
      if (state.browseNews.data) {
        state.browseNews.data.data = state.browseNews.data?.data.map(News => {
          return News.slug === state.editNews.params?.slug
            ? {
                ...News,
                slug: state.editNews.params?.slug,
                title: state.editNews.params?.title,
                body: state.editNews.params?.body,
                status: state.editNews.params?.status,
              }
            : News;
        });
      }
      state.editNews.params = initialState.editNews.params;
      state.editNews.data = action.payload;
    },
    editNewsError(state, action: PayloadAction<ErrorResponse>) {
      state.editNews.params = initialState.editNews.params;
      state.editNews.error = action.payload;
    },
    editNewsClear(state) {
      state.editNews = initialState.editNews;
    },
    //#endregion EditNews

    //#region UploadImage
    uploadImage(state, action: PayloadAction<UploadImageRequest>) {
      state.uploadImage.params = action.payload;
      state.uploadImage.data = initialState.uploadImage.data;
      state.uploadImage.error = initialState.uploadImage.error;
    },
    uploadImageSuccess(state, action: PayloadAction<UploadImageResponse>) {
      state.uploadImage.params = initialState.uploadImage.params;
      state.uploadImage.data = action.payload;
    },
    uploadImageError(state, action: PayloadAction<ErrorResponse>) {
      state.uploadImage.params = initialState.uploadImage.params;
      state.uploadImage.error = action.payload;
    },
    uploadImageClear(state) {
      state.uploadImage = initialState.uploadImage;
    },
    //#endregion UploadImage
  },
});

export const { actions, reducer, name: sliceKey } = newsPageSlice;
