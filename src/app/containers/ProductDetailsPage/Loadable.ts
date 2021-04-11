/**
 *
 * Asynchronously loads the component for ProductDetailsPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ProductDetailsPage = lazyLoad(
  () => import('./index'),
  module => module.ProductDetailsPage,
);
