/**
 *
 * Asynchronously loads the component for UserManagementPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const UserManagementPage = lazyLoad(
  () => import('./index'),
  module => module.UserManagementPage,
);
