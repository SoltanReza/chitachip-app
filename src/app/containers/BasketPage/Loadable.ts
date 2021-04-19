/**
 *
 * Asynchronously loads the component for BasketPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BasketPage = lazyLoad(
  () => import('./index'),
  module => module.BasketPage,
);
