/**
 *
 * Asynchronously loads the component for FinalFormPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const FinalFormPage = lazyLoad(
  () => import('./index'),
  module => module.FinalFormPage,
);
