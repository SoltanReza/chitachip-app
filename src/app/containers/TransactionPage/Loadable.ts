/**
 *
 * Asynchronously loads the component for TransactionPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TransactionPage = lazyLoad(
  () => import('./index'),
  module => module.TransactionPage,
);
