/**
 *
 * Asynchronously loads the component for SendInfoPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SendInfoPage = lazyLoad(
  () => import('./index'),
  module => module.SendInfoPage,
);
