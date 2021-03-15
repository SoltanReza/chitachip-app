/**
 *
 * Asynchronously loads the component for CurrencyPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CurrencyPage = lazyLoad(
  () => import('./index'),
  module => module.CurrencyPage,
);
