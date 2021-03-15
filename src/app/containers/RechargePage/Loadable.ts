/**
 *
 * Asynchronously loads the component for RechargePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const RechargePage = lazyLoad(
  () => import('./index'),
  module => module.RechargePage,
);
