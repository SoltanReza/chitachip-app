/**
 *
 * Asynchronously loads the component for AdminPanelPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AdminPanelPage = lazyLoad(
  () => import('./index'),
  module => module.AdminPanelPage,
);
