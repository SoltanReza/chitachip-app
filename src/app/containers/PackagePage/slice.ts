import { PayloadAction } from '@reduxjs/toolkit';
import { ErrorResponse } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  AddPackageRequest,
  AddPackageResponse,
  BrowsePackageRequest,
  BrowsePackageResponse,
  ContainerState,
  EditPackageRequest,
  EditPackageResponse,
} from './types';

// The initial state of the PackagePage container
export const initialState: ContainerState = {
  browsePackage: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  addPackage: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
  editPackage: {
    params: undefined,
    data: undefined,
    error: undefined,
  },
};

const packagePageSlice = createSlice({
  name: 'packagePage',
  initialState,
  reducers: {
    //#region browsePackage
    browsePackage(state, action: PayloadAction<BrowsePackageRequest>) {
      state.browsePackage.params = action.payload;
      state.browsePackage.data = initialState.browsePackage.data;
      state.browsePackage.error = initialState.browsePackage.error;
    },
    browsePackageSuccess(state, action: PayloadAction<BrowsePackageResponse>) {
      state.browsePackage.params = initialState.browsePackage.params;
      state.browsePackage.data = action.payload;
    },
    browsePackageError(state, action: PayloadAction<ErrorResponse>) {
      state.browsePackage.params = initialState.browsePackage.params;
      state.browsePackage.error = action.payload;
    },
    browsePackageClear(state) {
      state.browsePackage = initialState.browsePackage;
    },
    //#endregion browsePackage

    //#region addPackage
    addPackage(state, action: PayloadAction<AddPackageRequest>) {
      state.addPackage.params = action.payload;
      state.addPackage.data = initialState.addPackage.data;
      state.addPackage.error = initialState.addPackage.error;
    },
    addPackageSuccess(state, action: PayloadAction<AddPackageResponse>) {
      if (state.addPackage.params) {
        if (state.browsePackage.data) {
          state.browsePackage.data.data.push(action.payload);
        } else {
          state.browsePackage.data = {
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

      state.addPackage.params = initialState.addPackage.params;
      state.addPackage.data = action.payload;
    },
    addPackageError(state, action: PayloadAction<ErrorResponse>) {
      state.addPackage.params = initialState.addPackage.params;
      state.addPackage.error = action.payload;
    },
    addPackageClear(state) {
      state.addPackage = initialState.addPackage;
    },
    //#endregion addPackage

    //#region editPackage
    editPackage(state, action: PayloadAction<EditPackageRequest>) {
      state.editPackage.params = action.payload;
      state.editPackage.data = initialState.editPackage.data;
      state.editPackage.error = initialState.editPackage.error;
    },
    editPackageSuccess(state, action: PayloadAction<EditPackageResponse>) {
      if (state.browsePackage.data) {
        state.browsePackage.data.data = state.browsePackage.data.data.map(
          Package => {
            return Package.id === state.editPackage.params?.id
              ? {
                  ...Package,
                  title: state.editPackage.params?.title,
                  description: state.editPackage.params?.description,
                  price: state.editPackage.params?.price,
                  expire_at: state.editPackage.params?.expire_at,
                }
              : Package;
          },
        );
      }
      state.editPackage.params = initialState.editPackage.params;
      state.editPackage.data = action.payload;
    },
    editPackageError(state, action: PayloadAction<ErrorResponse>) {
      state.editPackage.params = initialState.editPackage.params;
      state.editPackage.error = action.payload;
    },
    editPackageClear(state) {
      state.editPackage = initialState.editPackage;
    },
    //#endregion editPackage
  },
});

export const { actions, reducer, name: sliceKey } = packagePageSlice;
