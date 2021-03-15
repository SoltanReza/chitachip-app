/**
 *
 * Asynchronously loads the component for TradingPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TradingPage = lazyLoad(
  () => import('./index'),
  module => module.TradingPage,
);
