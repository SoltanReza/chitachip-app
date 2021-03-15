/**
 *
 * Asynchronously loads the component for AdminMessagePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AdminMessagePage = lazyLoad(
  () => import('./index'),
  module => module.AdminMessagePage,
);
