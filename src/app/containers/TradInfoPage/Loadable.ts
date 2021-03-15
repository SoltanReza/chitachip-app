/**
 *
 * Asynchronously loads the component for TradInfoPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TradInfoPage = lazyLoad(
  () => import('./index'),
  module => module.TradInfoPage,
);
