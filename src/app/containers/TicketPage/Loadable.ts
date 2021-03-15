/**
 *
 * Asynchronously loads the component for TicketPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TicketPage = lazyLoad(
  () => import('./index'),
  module => module.TicketPage,
);
