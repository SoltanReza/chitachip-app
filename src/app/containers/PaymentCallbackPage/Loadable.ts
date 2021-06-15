/**
 *
 * Asynchronously loads the component for PaymentCallbackPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PaymentCallbackPage = lazyLoad(
  () => import('./index'),
  module => module.PaymentCallbackPage,
);
