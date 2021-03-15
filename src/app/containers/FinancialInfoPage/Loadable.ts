/**
 *
 * Asynchronously loads the component for FinancialInfoPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const FinancialInfoPage = lazyLoad(
  () => import('./index'),
  module => module.FinancialInfoPage,
);
