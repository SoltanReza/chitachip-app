import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.paymentCallbackPage || initialState;

export const selectPaymentCallbackPage = createSelector(
  [selectDomain],
  paymentCallbackPageState => paymentCallbackPageState,
);
