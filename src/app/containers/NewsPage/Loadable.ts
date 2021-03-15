/**
 *
 * Asynchronously loads the component for NewsPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const NewsPage = lazyLoad(
  () => import('./index'),
  module => module.NewsPage,
);
