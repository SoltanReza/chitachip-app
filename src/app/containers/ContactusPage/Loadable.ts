/**
 *
 * Asynchronously loads the component for ContactusPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ContactusPage = lazyLoad(
  () => import('./index'),
  module => module.ContactusPage,
);
