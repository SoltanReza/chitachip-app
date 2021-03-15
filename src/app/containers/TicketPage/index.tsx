/**
 *
 * TicketPage
 *
 */

import React from 'react';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

import { useSelector, useDispatch } from 'react-redux';

import { StyledTicketPage } from './styles';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { reducer, sliceKey } from './slice';
import { selectTicketPage } from './selectors';

import { ticketPageSaga } from './saga';
import { ListTicket } from './components/ListTicket';

interface Props {
  className?: string;
}

export function TicketPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: ticketPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ticketPage = useSelector(selectTicketPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <StyledTicketPage
      className={`TicketPage ${className || ''}`}
      title={t(translations.pages.TicketPage.title)}
      description={t(translations.pages.TicketPage.description)}
    >
      <ListTicket />
    </StyledTicketPage>
  );
}
