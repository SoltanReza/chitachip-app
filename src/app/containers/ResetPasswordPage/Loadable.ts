/**
 *
 * Asynchronously loads the component for ResetPasswordPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ResetPasswordPage = lazyLoad(
  () => import('./index'),
  module => module.ResetPasswordPage,
);
