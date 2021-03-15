/**
 *
 * Asynchronously loads the component for PackagePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PackagePage = lazyLoad(
  () => import('./index'),
  module => module.PackagePage,
);
